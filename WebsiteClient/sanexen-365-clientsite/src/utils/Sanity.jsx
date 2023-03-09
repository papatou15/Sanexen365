import {createClient} from '@sanity/client'


/**
 * Client pour se connecter au projet Sanity.io
 * 
 * @param {string} projectId ID du projet
 * @param {string} dataset Nom du dataset à utiliser
 * @param {boolean} useCdn Détermine si la requête accède au cache ou non (permet de fetch plus rapidement des données plus récente)
 * @param {string} apiVersion Date de l'API. Inscrire la date la plus récente pour utiliser la dernière version
 * @param {token} token Permet d'avoir accès à la base de donnée
 */
const client = createClient({
  projectId: 'au6d1rq5',
  dataset: 'work',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  token: 'skUBh3JKQ191tr06COu1dDW7YALDr1qKMHD5mOIfM3EGM2nVhmQQNI24szOQNuQyCguejyUHHbdVKtFRkC2N74Yj3IctfN3Lj8zDi4FgQ5KIaQ19jDjQUAQxmyI6vxSZYvEQJVz9jtwbOR5Ygl0Z8w2gOguSwsS8T45kE2JqWmpo5hMXPmuh'
})

export default client;