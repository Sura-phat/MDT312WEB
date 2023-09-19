var postcount = 0;
function postFunction()
{
    var input = "";
    
    input = document.getElementById("text1").value;
    if(postcount == 0)
    {
        document.getElementById("topic1").innerHTML = input;
        postcount++;
    }   
    
    else if(postcount == 1)
    {
        document.getElementById("comment1").innerHTML = input;
        postcount++;
    } 
    
    else if(postcount == 2)
    {
        document.getElementById("comment2").innerHTML = input;
        postcount++;
    } 


}

function clearFunction()
{
    postcount = 0;
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}