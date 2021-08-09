var breedImage=$("#Image");
var dropdown= $("#chose-breed");
var allowsubmit=true;
var breed;
$.get("https://dog.ceo/api/breeds/list/all",function(data,status){
    let dogbreeds=data.message;
    for(let breed in dogbreeds){

        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropdown.change(function(){
    allowsubmit=true;
});

$("form button").click(function(event){
    event.preventDefault();
    if(allowsubmit){
        breed=dropdown.val();
        displayDog(breed);
        allowsubmit=false;
    }
});

$("#next a").click(function(event){
    event.preventDefault();
    if(breed !== undefined){
        displayDog(breed);
    }
});
function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#Image img").remove();

    $.get(url, function (data, status) {
        let imageUrl = data.message;
        breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
    });

}