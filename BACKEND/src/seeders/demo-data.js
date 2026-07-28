'use strict';

const argon2 = require('argon2');
const { sequelize } = require('../models');

/** @type {import('sequelize_cli').Migration}*/
module.exports = {
    async up(queryInterface, Sequelize) {
        const hashedPassword = await argon2.hash('password2026');

        await queryInterface.bulkInsert('user', [
            {
                username: 'user',
                email: 'user@cinedelices.com',
                password_hash: 'hashedPassword',
                role: 'user',
                birth_date: new Date(),
                date_created: new Date()
            }
        ], {});

        await queryInterface.bulkInsert('category', [
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
        ], {});

        await queryInterface.bulkInsert('comment', [
            {

            }
        ], {});

        await queryInterface.bulkInsert('media', [
            {
                title: 'La petite sirène',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/sir%C3%A8ne.jpg',
                release_year: '2026',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Super Mario Bros',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/Mario.jpg',
                release_year: '2022',
                created_at: new Date(),
                update_at: new Date()
            },
            {
                title: 'La soupe aux choux',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/La_Soupe_aux_choux.jpg',
                release_year: '2023',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Doctor Who',
                type: 'serie',
                image_url: 'http://127.0.0.1:5501/public/img-home/who.webp',
                release_year: '2018',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Charlie et la chocolaterie',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/chocolat.webp',
                release_year: '2005',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Vice-Versa',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/vice%20versa.jpg',
                release_year: '2015',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Né quelque part',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/n%C3%A9.jpg',
                release_year: '2018',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'L\'odyssée de Pi',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-home/odyss%C3%A9.webp',
                release_year: '2012',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Ratatouille',
                type: 'movie',
                image_url: 'http://127.0.0.1:5501/public/img-card-sct-1/ratatouille.webp',
                release_year: '2014',
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});

        const [users] = await queryInterface.sequelize.query(
            `SELECT id, email FROM users ORDER BY id`
        );

        const [categories] = await queryInterface.sequelize.query(
            `SELECT id, name FROM categories ORDER BY id`
        );

        const [media] = await queryInterface / sequelize.query(
            `SELECT id, title FROM media ORDER BY id`
        );

        // Récupère la catégorie par l'IDs 

        const entrer = users.find(u => u.name === 'Entrer');
        const platPrincipale = users.find(u => u.name === 'Plat principale');
        const dessert = users.find(u => u.name === 'Dessert');
        const boissons = users.find(u => u.name === 'Boissons');

        // Récupère le média par l'IDs

        const laPetitSireneMedia = media.find(m => m.title === 'La petite sirène');
        const superMarioBrosMedia = media.find(m => m.title === 'Super Mario Bros');
        const laSoupeAuxChouxMedia = media.find(m => m.title === 'La soupe aux choux');
        const doctorWhoMedia = media.find(m => m.title === 'Doctor Who');
        const charlieEtLaChocolaterie = media.find(m => m.tile === 'Charlie et la chocolaterie');
        const viceVersa = media.find(m => m.title === 'Vice Versa');
        const neQuelquePartMedia = media.find(m => m.title === 'Né quelque part');
        const lodysseeDePiMdedia = media.find(m => m.title === 'L\'Odyssée de pi');
        const ratatouilleMedia = media.find(m => m.title === 'Ratatouille');

        await queryInterface.bulkInsert('recipes', [
            {
                title: 'La petite sirène',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: '',
                user_id: '',
                category_id: '',
                media_id: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Super Mario Bros',
                description: '',
                ingredients: '',
                instructions: '',
                difficulte: '',
                prep_time: '',
                prep_cook: '',
                image_url: '',
                user_id: '',
                category_id: '',
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
                image_url: '',
                user_id: '',
                category_id: '',
                media_id: '',
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
                image_url: '',
                user_id: '',
                category_id: '',
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
                image_url: '',
                user_id: '',
                category_id: '',
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
                image_url: '',
                user_id: '',
                category_id: '',
                media_id: '',
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
                image_url: '',
                user_id: '',
                category_id: '',
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
                image_url: '',
                user_id: '',
                category_id: '',
                media_id: '',
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
                image_url: '',
                user_id: '',
                category_id: '',
                media_id: '',
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await

        queryInterface.bulkInsert('categories', null {});
    //    queryInterface.bulkInsert('comment', null {});
        queryInterface.bulkInsert('media', nul {});
        queryInterface.bulkInsert('usees', null {});
        queryInterface.bulkInsert('recipes', null {});
    }
}
