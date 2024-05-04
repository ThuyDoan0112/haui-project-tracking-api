const cron = require('node-cron')
const prisma = require('../prisma')
const { sendMail } = require('./mail')

cron.schedule('0 22 10 * * *', async function() {
  console.log('---------------------');
  console.log('Running Cron Job');

  const today = new Date();
  const reports = await prisma.report.findMany({
    where: {
      dueDate: {
        gte: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7),
        lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 7)
      }
    }
  });

  const projectIds = reports.map((report) => report.projectId)
  const usersOnClasses = await prisma.usersOnClasses.findMany({
    where: {
      projectId: {
        in: projectIds
      }
    },
    include: {
      user: true
    }
  })

  const userEmails = new Set(usersOnClasses.map(({user}) => user.email))

  for (const email of userEmails) {
    const messageOptions = {
      from: 'teacher@gmail.com',
      to: email,
      subject: 'Report Tasks',
      text: 'Please check your tasks for this week!',
    };

    await sendMail(messageOptions, (info) => {
      console.log("Email sent successfully");
      console.log("MESSAGE ID: ", info.messageId);
    })
  }
});