const testingController = async (req , res) => {
    res.status(200).send("<h1>Testing Page</h1>")
}

module.exports = {testingController}