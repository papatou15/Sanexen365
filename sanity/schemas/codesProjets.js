export default{
    type: 'document',
    name: 'projectCodes',
    title: 'Codes de projets',
    fields: [
        {
            type: 'string',
            name: 'projectCode',
            title: 'Code du projet',
            description: 'Inscrire le code du projet (AP/EX00-000)',
            validation: Rule => Rule.required()
        },
        {
            type: 'array',
            of: [{type: 'reference', to: [{type: 'employes', options: { filter: "role == 'foreman'"}}]}],
            name: 'refContremaitre',
            title: 'Contremaitres assignés'
        }
    ]
}