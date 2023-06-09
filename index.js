
var imgbox=document.getElementsByClassName("imgbox");
var conbox=document.getElementsByClassName("whitebox");
var msg=document.getElementById("msg");
for(let box of imgbox)
{
    
    box.addEventListener('dragstart',(e)=>
    {
      e.target.className+=" startdrag";
     
      conbox[1].addEventListener('dragover',(e1)=>{
        e1.preventDefault();
        
      });
      conbox[1].addEventListener('dragenter',(e3)=>
      {
          e3.target.className+=' enterdrag';
      }
      )
      conbox[1].addEventListener('dragleave',(e4)=>
      {
        e4.target.className='whitebox';
      }
      )
      conbox[1].addEventListener('drop',(e2)=>{
        e2.preventDefault();
        e2.target.append(e.target);
        e2.target.className='whitebox';
        msg.hidden=false;
        setTimeout(()=>msg.hidden=true,3000);
        
      })
    }
    )
    box.addEventListener('dragend',(e)=>
    {
        e.target.className="imgbox";
        
    }
    )
}
function reset_image()
{
   location.reload();
}