import argon2 from 'argon2';
import { User } from './src/models/index.js';
import db from './src/database/database.js';

const createTestAccounts = async () => {
    try {
        console.log('🔐 Création des comptes de test...');

        // Vérifier la connexion
        await db.authenticate();
        console.log('✅ Connexion à la base de données réussie.');

        // Hasher le mot de passe
        const hashedPassword = await argon2.hash('Demo2026!');

        // Créer le compte ADMIN
        const adminExists = await User.findOne({ where: { email: 'admin@cinedelices.com' } });
        if (!adminExists) {
            await User.create({
                username: 'Admin',
                email: 'admin@cinedelices.com',
                password_hash: hashedPassword,
                role: 'admin'
            });
            console.log('✅ Compte ADMIN créé');
            console.log('   Email: admin@cinedelices.com');
            console.log('   Mot de passe: Demo2026!');
        } else {
            console.log('⚠️  Compte ADMIN existe déjà');
        }

        // Créer le compte USER
        const userExists = await User.findOne({ where: { email: 'user@cinedelices.com' } });
        if (!userExists) {
            await User.create({
                username: 'ChefCinema',
                email: 'user@cinedelices.com',
                password_hash: hashedPassword,
                role: 'user'
            });
            console.log('✅ Compte USER créé');
            console.log('   Email: user@cinedelices.com');
            console.log('   Mot de passe: Demo2026!');
        } else {
            console.log('⚠️  Compte USER existe déjà');
        }

        console.log('\n🎯 Identifiants pour la démo:\n');
        console.log('┌─ ADMIN ─────────────────┐');
        console.log('│ Email: admin@cinedelices.com');
        console.log('│ MDP: Demo2026!');
        console.log('└──────────────────────────┘\n');
        console.log('┌─ USER ──────────────────┐');
        console.log('│ Email: user@cinedelices.com');
        console.log('│ MDP: Demo2026!');
        console.log('└──────────────────────────┘\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Erreur:', error.message);
        process.exit(1);
    }
};

createTestAccounts();
