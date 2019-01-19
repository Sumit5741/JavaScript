var fun=function()
            {
            console.log("Hello World!!!!!!");
            }
        var callFun=function()
            {
            call(fun);
            }
        function call(callFun)
        {
            callFun();
        }