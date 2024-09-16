function parse_phonenumber(phone){
    if(phone.startsWith("05")){
        return "+972"+phone.slice(1)
    }
    return phone


}


async function redirect()  {
    console.log("you will be redirected...")
 
    let await_json = await fetch("toranim.json")
    let json_phones = await await_json.text()
    json_phones = JSON.parse(json_phones)
    let text = json_phones["text"]
    let phone = [json_phones["A"],json_phones["B"]].map((x)=>x["phone"])[Math.floor(Math.random() * 2)]
    var link_format = `https://api.whatsapp.com/send/?phone=${encodeURI(parse_phonenumber(phone))}&text=${encodeURI(text)}`
    var elment = document.getElementById("href_link").href = link_format
    window.location.replace(link_format)
}


redirect()
