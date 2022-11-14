import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({ log: ['error', 'info', 'query', 'warn'] });

async function main() {
    if ((await db.post.count()) === 0) {
        await db.post.createMany({
            data: [
                {
                    title: 'Ultimate Node Stack 2022',
                    createdAt: new Date(),
                    published: true,
                },
                {
                    title: 'Ultimate Node Stack 1999',
                    createdAt: new Date(),
                    published: false,
                },
            ],
        });
    }

    if ((await db.profile.count()) === 0) {
        await db.profile.createMany({
            data: [
                {
                    bio: 'Ultimate Node Stack 2022',
                },
                {
                    bio: 'Ultimate Node Stack 1999',
                },
            ],
        });
    }

    if ((await db.user.count()) === 0) {
        await db.user.createMany({
            data: [
                {
                    email: 'vlad@gmail.com',
                    name: 'Vlad',
                },
                {
                    email: 'lina@gmail.com',
                    name: 'Lina',
                },
            ],
        });
    }
}

main()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });
