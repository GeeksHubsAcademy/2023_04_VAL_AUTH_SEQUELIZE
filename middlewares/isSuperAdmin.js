const isSuperAdmin = (req, res, next) => {
    try {
        if (req.roleId !== 3) {
            return res.json({
                success: true,
                message: "You dont have super_admin permissions"
            });
        } 
        
        next();
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "You dont have super_admin permissions",
                error: error
            }
        )   
    }
}


module.exports = isSuperAdmin;