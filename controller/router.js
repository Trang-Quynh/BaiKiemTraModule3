const studentController = require('./handle/studentController')
const router = {
    'home': studentController.showHome,
    'edit': studentController.editStudent,
    'add': studentController.addStudent,
    'detail':studentController.showDetail
}
module.exports = router
