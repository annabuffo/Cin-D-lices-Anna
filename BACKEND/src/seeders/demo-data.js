'use strict';

const argon2 = require('argon2');

/** @type {import('sequelize_cli').Migration}*/
module.exports = {
    async up(queryInterface, Sequelize) {
        const hashedPassword = await argon2.hash('password2026');

        await queryInterface.bulkInsert('users', [
            {
                username: 'admin',
                email: 'admin@cinedelices.com',
                password_hash: hashedPassword,
                role: 'admin',
                birth_date: new Date(),
                date_created: new Date()
            },
            {                
                username: 'ChefCinema',
                email: 'user@cinedelices.com',
                password_hash: hashedPassword,
                role: 'user',
                birth_date: new Date(),
                date_created: new Date()
            }
        ]);

        await queryInterface.bulkInsert('categories', [
            {
                name: 'Entrer',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Plat principale',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Dessert',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Boissons',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);

        await queryInterface.bulkInsert('media', [
            {
                title: 'La petite sirène',
                type: 'movie',
                image_url: 'http://public/img-card-sct-1/sir%C3%A8ne.jpg',
                release_date: '2026-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Super Mario Bros',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/Mario.jpg',
                release_date: '2022-01-01',
                description: '',
                created_at: new Date(),
                update_at: new Date()
            },
            {
                title: 'La soupe aux choux',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/La_Soupe_aux_choux.jpg',
                release_date: '2023-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Doctor Who',
                type: 'serie',
                image_url: 'http://127.0.0.1:5501/public/img-home/who.webp',
                release_date: '2018-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Charlie et la chocolaterie',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/chocolat.webp',
                release_date: '2005-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Vice-Versa',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/vice%20versa.jpg',
                release_date: '2015-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Né quelque part',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/n%C3%A9.jpg',
                release_date: '2018-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'L\'odyssée de Pi',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/odyss%C3%A9.webp',
                release_date: '2012-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Ratatouille',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/ratatouille.webp',
                release_date: '2014-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Aquaman',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/aquaman1.webp',
                release_date: '2018-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Aquaman 2',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/aquaman2.webp',
                release_date: '2023-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Alice au pays des merveilles',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/alice.webp',
                release_date: '2010-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Les Simpsons le film',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/simpson.webp',
                release_date: '2007-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Vaiana',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/vaiana.webp',
                release_date: '2016-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Vaiana 2',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/vaiana2.webp',
                release_date: '2024-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: ' Toys Story',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/toysStory.jpg',
                release_date: '1995-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Pirates des caraïbe',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/pdc1.webp',
                release_date: '2003-01-01',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Pirates des caraïbe 2',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/pdc2.jpeg',
                release_year: '2006',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Pirates des caraïbe 3',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/pdc3.webp',
                release_year: '2007',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Pirates des caraïbes 4',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/pdc4.webp',
                release_year: '2011',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Raiponce',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/raiponce.jpg',
                release_year: '2010',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Rio',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/rio1.jpg',
                release_year: '2011',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Rio 2',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/rio2.jpg',
                release_year: '2014',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Epic',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/epic.jpg',
                release_year: '2013',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Le monde de Ralph',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/lmdr.jpg',
                release_year: '2012',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Coco',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/coco.jpeg',
                release_year: '2017',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Soul',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/soul.jpeg',
                release_year: '2020',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter à L\'école des Sorciers',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry1.jpg',
                release_year: '2001',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter et la Chambre des secrets',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry2.jpg',
                release_year: '2002',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter et le Prisonnier d\'Azkaban',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry3.webp',
                release_year: '2004',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter et la Coupe de feu',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry4.webp',
                release_year: '2005',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter et l\'Ordre du Phénix',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry5.jpg',
                release_year: '2007',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: ' Harry Potter et le Prince de sang-mêlé',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry6.jpg',
                release_year: '2009',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter et les reliques de la mort - 1 ère partie',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry7.1.avif',
                release_year: '2010',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter et les reliques de la mort - 2 ère partie',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry7.2.webp',
                release_year: '2011',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Le Grinch',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/grinch.jpg',
                release_year: '2000',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Loki - saison 1',
                type: 'serie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/loki1.jpg',
                release_year: '2021',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Loki - saison 2',
                type: 'serie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/loki2.jpg',
                release_year: '2021',
                description: '',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);

        const [users] = await queryInterface.sequelize.query(
            `SELECT id, email FROM users ORDER BY id`
        );

        const adminUser = users.find(
            user => user.email === 'admin@cinedelices.com'
        );

        const [categories] = await queryInterface.sequelize.query(
            `SELECT id, name FROM categories ORDER BY id`
        );

        const [media] = await queryInterface.sequelize.query(
            `SELECT id, title FROM media ORDER BY id`
        );

        // Récupère la catégorie par l'IDs 

        const entrer = categories.find(u => u.name === 'Entrer');
        const platPrincipale = categories.find(u => u.name === 'Plat principale');
        const dessert = categories.find(u => u.name === 'Dessert');
        const boissons = categories.find(u => u.name === 'Boissons');

        // Récupère le média par l'IDs

        const laPetitSireneMedia = media.find(m => m.title === 'La petite sirène');
        const superMarioBrosMedia = media.find(m => m.title === 'Super Mario Bros');
        const laSoupeAuxChouxMedia = media.find(m => m.title === 'La soupe aux choux');
        const doctorWhoMedia = media.find(m => m.title === 'Doctor Who');
        const charlieEtLaChocolaterieMedia = media.find(m => m.title === 'Charlie et la chocolaterie');
        const viceVersaMedia = media.find(m => m.title === 'Vice Versa');
        const neQuelquePartMedia = media.find(m => m.title === 'Né quelque part');
        const lodysseeDePiMdedia = media.find(m => m.title === 'L\'Odyssée de pi');
        const ratatouilleMedia = media.find(m => m.title === 'Ratatouille');
        const aquamanMedia = media.find(m => m.title === 'Aquaman');
        const aquaman2Media = media.find(m => m.title === 'Aquaman 2');
        const aliceAuPaysDesMerveillesMedia = media.find(m => m.title === 'Alice au pays des merveilles');
        const lesSimpsonsLeFilmMedia = media.find(m => m.title === 'Les Simpsons le film');
        const vaianaMedia = media.find(m => m.title === 'Vaiana');
        const vaiana2Media = media.find(m => m.title === 'Vaiana 2');
        const toysStoryMedia = media.find(m => m.title === 'Toys Story');
        const piratesDesCaraïbeMedia = media.find(m => m.title === 'Pirates des caraïbes');
        const piratesDesCaraïbe2Media = media.find(m => m.title === 'Pirates des caraïbes 2');
        const piratesDesCaraïbe3Media = media.find(m => m.title === 'Pirates des caraïbes 3');
        const piratesDesCaraïbe4Media = media.find(m => m.title === 'Pirates des caraïbes 4');
        const raiponceMedia = media.find(m => m.title === 'Raiponce');
        const rioMedia = media.find(m => m.title === 'Rio');
        const rio2Media = media.find(m => m.title === 'Rio 2');
        const epicMedia = media.find(m => m.title === 'Epic');
        const leMondeDeRalphMedia = media.find(m => m.title === 'Le monde de Ralph');
        const cocoMedia = media.find(m => m.title === 'Coco');
        const soulMedia = media.find(m => m.title === 'Soul');
        const harryPotterALecoleDesSorciersMedia = media.find(m => m.title === 'Harry Potter à L\'école des Sorciers');
        const harryPotterEtLaChambreDesSecretsMedia = media.find(m => m.title === 'Harry Potter et la Chambre des secrets');
        const harryPotterEtLePrisonnierDazkabanMedia = media.find(m => m.title === 'Harry Potter et le Prisonnier d\'Azkaban');
        const harryPotterEtLaCoupeDeFeuMedia = media.find(m => m.title === 'Harry Potter et la Coupe de feu');
        const harryPotterEtLordreDuPhenixMedia = media.find(m => m.title === 'Harry Potter et l\'Ordre du Phénix');
        const harryPotterEtLePrinceDeSangMeleMedia = media.find(m => m.title === 'Harry Potter et le Prince de sang-mêlé');
        const harryPotterEtLesReliquesDeLaMort1erePartieMedia = media.find(m => m.title === 'Harry Potter et les reliques de la mort - 1 ère partie');
        const harryPotterEtLesReliquesDeLaMort2emePartieMedia = media.find(m => m.title === 'Harry Potter et les reliques de la mort - 2 ère partie');
        const leGrinchMedia = media.find(m => m.title === 'Le Grinch');
        const lokiSaison1Media = media.find(m => m.title === 'Loki - saison 1');
        const lokiSaison2Media = media.find(m => m.title === 'Loki - saison 2');

        await queryInterface.bulkInsert('recipes', [
            {
                title: 'Super Mario Bros',
                description: '',
                ingredients: '500g de tagliatelles fraîches - 500g de champignons de Paris, nettoyés et tranchés - 250g de lardons fumés - 2 échalotes, finement hachées - 2 gousses d’ail, pressées - 200ml de crème fraîche épaisse - 50g de parmesan râpé, plus un peu pour servir - 2 cuillères à soupe d\'huile d\'olive - 1 cuillère à soupe de beurre - Persil frais haché, pour la garniture -Sel et poivre noir - Une pincée de noix de muscade (facultatif)',
                instructions: '1. Préparation des champignons: Commencez par bien nettoyer vos champignons. Je préfère les essuyer délicatement avec un chiffon humide plutôt que de les laver sous l’eau, car ils absorbent l’eau et peuvent devenir spongieux. Une fois nettoyés, tranchez-les en lamelles d’environ 5mm d’épaisseur. N’hésitez pas à utiliser un couteau bien aiguisé pour une coupe nette. 2.Cuisson des lardons: Dans une grande poêle, faites revenir les lardons à feu moyen. L’objectif est de les rendre croustillants et de libérer leur graisse. Remuez régulièrement pour éviter qu’ils ne brûlent. Une fois qu’ils sont bien dorés et croustillants, retirez-les de la poêle et réservez-les sur une assiette recouverte de papier absorbant pour éliminer l’excès de graisse. Gardez la graisse de cuisson dans la poêle, elle servira à cuire les champignons et apportera une saveur incroyable. 3. Cuisson des échalotes et de l’ail: Dans la même poêle (avec la graisse des lardons), ajoutez l’huile d’olive et le beurre. Faites chauffer à feu moyen. Ajoutez ensuite les échalotes hachées et faites-les revenir jusqu’à ce qu’elles soient translucides et légèrement dorées, environ 3 à 5 minutes. Ajoutez ensuite l’ail pressé et faites cuire pendant une minute supplémentaire, en remuant constamment, jusqu’à ce qu’il soit parfumé. Attention à ne pas brûler l’ail, car il deviendrait amer.`4. Cuisson des champignons: Ajoutez les champignons tranchés dans la poêle avec les échalotes et l’ail. Faites cuire à feu moyen-vif, en remuant régulièrement, jusqu’à ce qu’ils aient rendu leur eau et qu’ils soient dorés et tendres. Cela prendra environ 8 à 10 minutes. N’hésitez pas à augmenter le feu si nécessaire pour que l’eau s’évapore rapidement. Une fois que les champignons sont bien cuits, déglacez la poêle avec le vin blanc (si vous en utilisez). Laissez le vin s’évaporer pendant quelques minutes, en grattant le fond de la poêle pour décoller les sucs de cuisson.',
                difficulte: 'Simple',
                prep_time: 10,
                prep_cook: 15,
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/champignon.jpg',
                user_id: adminUser.id,
                category_id: platPrincipale,
                media_id: superMarioBrosMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'La petite sirène',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/poisson.jpg',
                user_id: adminUser.id,
                categories_id: platPrincipale.id,
                media_id: laPetitSireneMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Ratatouille',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/ratatouille.webp',
                user_id: '',
                category_id: platPrincipale.id,
                media_id: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'La soupe aux choux',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/choux.png',
                user_id: '',
                categories_id: platPrincipale.id,
                media_id: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Charlie et la chocolaterie',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/moelleux.jpg',
                user_id: '',
                categories_id: dessert.id,
                media_id: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'L\'Odyssée de Pi',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/rizCurry.jpeg',
                user_id: '',
                categories_id: platPrincipale.id,
                media_id: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Vice versa',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/emotion.jpg',
                user_id: '',
                categories_id: dessert.id,
                media_id: viceVersaMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Doctor Who',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-home/who.webp',
                user_id: '',
                categories_id: platPrincipale.id,
                media_id: doctorWhoMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Né quelque part',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-home/n%C3%A9.jpg',
                user_id: '',
                categories_id: dessert.id,
                media_id: neQuelquePartMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Aquaman',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/aquaman1.webp',
                user_id: '',
                categories_id: platPrincipale.id,
                media_id: aquamanMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Aquaman 2',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/aquaman2.webp',
                user_id: '',
                categories_id: ,
                media_id: aquaman2Media.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Alice au pays des merveilles',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/alice.webp',
                user_id: '',
                categories_id: '',
                media_id: aliceAuPaysDesMerveillesMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Les Simpsons le film',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/simpson.webp',
                user_id: '',
                categories_id: '',
                media_id: lesSimpsonsLeFilmMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Vaiana',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/vaiana.webp',
                user_id: '',
                categories_id: '',
                media_id: vaianaMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Vaiana 2',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/vaiana2.webp',
                user_id: '',
                categories_id: '',
                media_id: vaiana2Media.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Toys Story',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/toysStory.jpg',
                user_id: '',
                categories_id: '',
                media_id: toysStoryMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Pirates des caraïbe',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/pdc1.webp',
                user_id: '',
                categories_id: '',
                media_id: piratesDesCaraïbeMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Pirates des caraïbes 2',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/pdc2.jpeg',
                user_id: '',
                categories_id: '',
                media_id: piratesDesCaraïbe2Media.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Pirates des caraïbes 3',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/pdc3.webp',
                user_id: '',
                categories_id: '',
                media_id: piratesDesCaraïbe3Media.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Pirates des caraïbes 4',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/pdc4.webp',
                user_id: '',
                categories_id: '',
                media_id: piratesDesCaraïbe4Media.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Raiponce',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/raiponce.jpg',
                user_id: '',
                categories_id: '',
                media_id: raiponceMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Rio',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/rio1.jpg',
                user_id: '',
                categories_id: '',
                media_id: rioMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Rio 2',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/rio2.jpg',
                user_id: '',
                categories_id: '',
                media_id: rio2Media.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Epic',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/epic.jpg',
                user_id: '',
                categories_id: '',
                media_id: epicMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Le monde de Ralph',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/lmdr.jpg',
                user_id: '',
                categories_id: '',
                media_id: leMondeDeRalphMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Coco',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/coco.jpeg',
                user_id: '',
                categories_id: '',
                media_id: cocoMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Soul',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/soul.jpeg',
                user_id: '',
                category_id: '',
                media_id: soulMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter à L\'école des Sorciers',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry1.jpg',
                user_id: '',
                category_id: '',
                media_id: harryPotterALecoleDesSorciersMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: ' Harry Potter et la Chambre des secrets',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry2.jpg',
                user_id: '',
                category_id: '',
                media_id: harryPotterEtLaChambreDesSecretsMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: ' Harry Potter et le Prisonnier d\'Azkaban',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry3.webp',
                user_id: '',
                category_id: '',
                media_id: harryPotterEtLePrisonnierDazkabanMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter et la Coupe de feu',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry4.webp',
                user_id: '',
                category_id: '',
                media_id: harryPotterEtLaCoupeDeFeuMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: ' Harry Potter et l\'Ordre du Phénix',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry5.jpg',
                user_id: '',
                category_id: '',
                media_id: harryPotterEtLordreDuPhenixMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                title: 'Harry Potter et le Prince de sang-mêlé',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry6.jpg',
                user_id: '',
                category_id: '',
                media_id: harryPotterEtLePrinceDeSangMeleMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter et les reliques de la mort - 1 ère partie',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry7.1.avif',
                user_id: '',
                category_id: '',
                media_id: harryPotterEtLesReliquesDeLaMort1erePartieMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Harry Potter et les reliques de la mort - 2 ère partie',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/harry7.2.webp',
                user_id: '',
                category_id: '',
                media_id: harryPotterEtLesReliquesDeLaMort2emePartieMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Le Grinch',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/grinch.jpg',
                user_id: '',
                category_id: '',
                media_id: leGrinchMedia.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: ' Loki - saison 1',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/loki1.jpg',
                user_id: '',
                category_id: '',
                media_id: lokiSaison1Media.id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Loki - saison 2',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/loki2.jpg',
                user_id: '',
                category_id: '',
                media_id: lokiSaison2Media.id,
                created_at: new Date(),
                updated_at: new Date()
            },
        ]);

        const comments = await Comment.bulkCreate([
            {
                content: "Cette recette est vraiment excellente !",
                user_id: users[0].id,
                recipe_id: recipes[0].id
            },
            {
                content: "Je vais essayer cette recette ce week-end.",
                user_id: users[1].id,
                recipe_id: recipes[0].id
            },
            {
                content: "Les instructions sont très faciles à suivre.",
                user_id: users[0].id,
                recipe_id: recipes[1].id
            }
        ]);

    },

    async down(queryInterface, Sequelize) {
        await

            queryInterface.bulkInsert('categories', null, {});
        queryInterface.bulkInsert('comment', null, {});
        queryInterface.bulkInsert('media', null, {});
        queryInterface.bulkInsert('users', null, {});
        queryInterface.bulkInsert('recipes', null, {});
    }
};