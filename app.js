const imgInt = document.getElementById("imgInt");
const rmBt = document.getElementById("rmBt");
const finalImg = document.getElementById("finalImg");
const down = document.getElementById("down");

rmBt.addEventListener("click", async () => {
    const file = imgInt.files[0];

    if(!file){
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const reponse = await fetch("http://localhost:8000/remove-bg",
        {
            method: "POST",
            body: formData,
        }
    );

    const blob = await reponse.blob();
    const url = URL.createObjectURL(blob);

    finalImg.src = url;
    down.href = url;
    down.style.display = "inline-block";
    down.setAttribute('download', 'result.png');
})