export default{
    type: 'document',
    name: 'employes',
    title: 'Employés',
    fields: [
        {
            type: 'string',
            name: 'name',
            title: 'Prénom',
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            name: 'lastName',
            title: 'Nom de famille',
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            name: 'phone',
            title: 'Numéro de téléphone',
            description: 'Écrire le numéro de téléphone sans espace ou tiret',
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            name: 'role',
            title: 'Rôle',
            options: {
                list: [
                    {title: 'Technicien', value: 'technicien'},
                    {title: 'Manoeuvre', value: 'helper'},
                    {title: 'Chauffeur', value: 'driver'},
                    {title: "Chef d'équipe", value: 'teamLeader'},
                    {title: 'Contremaître', value: 'foreman'}
                ]
            }
        }
    ]
}