
/**
 * Fonction qui retourne la date à l'instant même
 * 
 * @returns Date d'aujourd'hui
 */
export default function getDate(){
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = today.toDateString('fr-FR', options);
    console.log(today);

    return date;
}