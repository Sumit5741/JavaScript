    var storage=["DDLJ","Dilwale","Mohabatten"];
    var show=function()
    {
    document.write("The SRK best movies are as follows :"+"<br\>");
    for(var i=0;i<storage.length;i++)
    {
        document.write(storage[i]+"  "+"<br\>");
    }
    }
    function getElement()
    {
        storage.forEach(element => {
            document.writeln(element+"<br\>");
        });
        // var name=document.getElementById('movie').value;
        // alert('Value Popped!!!')
        // for(let i=0;i<storage.length;i++)
        // {
        //     document.write(storage.pop(storage[length-1]));
        // }
        // alert('Hello!!!')
    }
    function fun()
    {
        // if(document.getElementById('movie').value!==null)
        // {
        pushElement(getElement);
        // }
        // else
        // {
        //     alert('field is empty');
        // }
    }
    function pushElement(callback)
    {
        var name=document.getElementById('movie').value;
        // alert('Value Pushed!!!')
        if(name.length==0)
        {
            alert('field is empty');
        }
        else
        {
            storage.push(name);
            callback();
        }
        // alert('Hello!!!')
    }
    // pushElement(getElement);
