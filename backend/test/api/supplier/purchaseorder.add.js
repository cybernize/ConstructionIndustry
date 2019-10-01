const expect = require('chai').expect;
const request = require('supertest');

const conn = require('../../../app');

describe('POST /purchaseOrder', ()=>{
    before((done) => {
        conn.connect()
            .then(()=> done())
            .catch((err)=> done(err));
    })

    after((done) => {
        conn.close()
            .then(()=> done())
            .catch((err)=> done(err));
    })
    const expect = require('chai').expect;
    const request = require('supertest');

    const conn = require('../../../app');

    describe('POST /', ()=>{
        before((done) => {
            conn.connect()
                .then(()=> done())
                .catch((err)=> done(err));
        })

        after((done) => {
            conn.close()
                .then(()=> done())
                .catch((err)=> done(err));
        })

        it('OK, creating a new requisition', (done) => {
            request(conn.app).post('/requisitions')
                .send({id:"akhfbak",
                    userId:"56451351",
                    siteName:"auygda",
                    itemName:"easfuigaesif",
                    type:"efueaf",
                    quantity:652,
                    perAgreedPrice:65746,
                    perApprovedSupplier:"sefiusegf",
                    tprice: 4684,
                    AccountNo:"5646468748",
                    createdAt: Date.now(),
                    status:0})
                .then((res => {
                    const body = res.body;
                    expect(body).to.contain.property('_id');
                    done();
                }))
                .catch((err) => done(err))
        })

        it('Fail, business  cart requires pqty', (done) => {
            request(conn.app).post('/purchaseOrder')
                .send({id:"akhfbak",
                    userId:"56451351",
                    siteName:"auygda",
                    itemName:"easfuigaesif",
                    type:"efueaf",
                    quantity:652,
                    total: 5645645,
                    deliveryDate: Date.now(),
                    status: 0})
                .then((res => {
                    const body = res.body;
                    expect(body.errors)
                    done();
                }))
                .catch((err) => done(err))
        })
    })

    it('Fail, supplier requires supplier Id', (done) => {
        request(conn.app).post('/purchaseOrder')
            .send({id:"akhfbak",
                userId:"56451351",
                siteName:"auygda",
                itemName:"easfuigaesif",
                type:"efueaf",
                quantity:652,
                total: 5645645,
                deliveryDate: Date.now()})
            .then((res => {
                const body = res.body;
                expect(body.errors)
                done();
            }))
            .catch((err) => done(err))
    })
})