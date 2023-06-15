import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Customer from './model/Customer.js';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://jloman200:jloman200@cluster0.vl4iw57.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Get all customers
app.get('/customers', async(req, res) => {
    const customers = await Customer.find()
    try {
        res.send(customers);
        } catch (error) {
                res.send(error);
        }
});

// Get a customer by id
app.get('/customers/:id', async(req, res) => {
    const id = req.params.id;
    const customer = await Customer.findById(id);
    try {
        res.send(customer);
        } catch (error) {
            res.send(error);
        }
});
 
// Add a new customer
app.post('/customers',async(req, res) => {
    const{ name, age, address } = req.body;
    console.log(req.body);
    const customer = new Customer({ name, age, address });
    try {
        const result = await customer.save();
        res.send(result);
        } catch (error) {
                res.send(error);
        }
}
);

  app.listen(4000, () => console.log(`Book service listening on port ${4000}`));