   
var getId = function ()
     {
        var id = 1;
        return function () 
        {
            id++;
        }
    }

    function CreateTextbox() 
    {
        var box = document.getElementById("divCreateTextbox");
        var curr = 'txt' + getId();
        var inp = document.createElement('input');
        inp.type = 'text';
        inp.name = 'textfield';
        inp.setAttribute("id", 'curr');
        inp.setAttribute("minlength", '1');
        box.appendChild(inp);
        inp.setAttribute('onkeyup', 'moveOnMin(this)');
        inp.setAttribute("textBoxAdded", "0");
        inp.focus();

    }

    function moveOnMin(s)
     {
         if (s.value.length == parseInt(s.getAttribute("minlength")) && s.getAttribute("textBoxAdded") == "0")
         {
            CreateTextbox();
            s.setAttribute("textBoxAdded", "1");
            s.focus();
        }
    }