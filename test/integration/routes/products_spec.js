import app from '../../../src/app';
import Product from '../../../src/models/product';

describe("Routes: Products", () => {

    before(async () => {
        await app.database.connect();
    });

    after(async () => await app.database.connection.close());

    const defaultProduct = {
        name: "Default product",
        description: "product description",
        price: 100
    };

    const expectedProduct = {
        __v: 0,
        _id: '56cb91bdc3464f14678934ca',
        name: 'Default product',
        description: 'product description',
        price: 100
    };

    beforeEach(async () => {
        await Product.deleteMany();

        const product = new Product(defaultProduct);
        product._id = '56cb91bdc3464f14678934ca';
        return await product.save();
    });

    afterEach(async () => await Product.deleteMany());

    describe("GET /products", () => {
        it("should return a list of products", done => {
            request.get("/products").end((err, res) => {
                expect(res.body[0]).to.eql(expectedProduct);
                done(err);
            });
        });
    });
});