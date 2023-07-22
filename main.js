document.getElementById("form").addEventListener("submit",async(event)=>{
event.preventDefault();
let data={
    name:event.target.name.value
}
const res=await axios.post("http://localhost:5000/adddata/dbname",data)
const ress=await axios.get("http://localhost:5000/getalldata/dbname")
console.log(ress.data)
})