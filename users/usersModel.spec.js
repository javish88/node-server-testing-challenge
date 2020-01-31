const UserData = require('./usersModel');
const db = require('../data/dbConfig');

describe('users model', function(){
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('insert()', function(){

        it('should add a user to the database', async function(){
            await UserData.insert({ name: 'Neville'});
            await UserData.insert({ name: 'Ginny'});
            const user = await db('users');
    
            expect(user).toHaveLength(2);
        });
    });
    describe('remove()', function(){
        it('should remove a user from the database', async function(){
            await UserData.remove({});
            const removed = await db('users');

            expect(removed).toHaveLength(0);
        })
    })

    
});