import React from "react";

const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="flex items-center justify-center h-full">
            {children}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis itaque ratione numquam assumenda! Cupiditate in quaerat accusantium eaque omnis esse pariatur beatae ducimus minima rerum exercitationem earum harum, laudantium quis, inventore odio voluptas ea iure saepe voluptate. Esse, libero?
        </div>
     );
}

export default AuthLayout;