export default function getDate(){
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = today.toDateString('fr-FR', options);
    console.log(today);

    return date;
}