const Kue = require('kue')
const jobs = require('../jobs')


const queue = Kue.createQueue({ jobEvents : false })

queue.process(jobs.crawlerTraduction.key, jobs.crawlerTraduction.findTraduction)


module.exports = queue