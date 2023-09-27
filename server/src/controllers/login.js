const users = require("../utils/users");

module.exports = (req, res) =>{
    const { email, password} = req.query;
    //* users = [{ email: ---, password:---}, {..usua..}, {..usua2...}]
    let access = false
    users.forEach(user=>{
        if(
            user.email === email && user.password === password
        ) access = true
    })
    return res.status(200).json({ access })
}
