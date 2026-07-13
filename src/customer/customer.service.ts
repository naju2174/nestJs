import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { v4 as uuid } from 'uuid';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(createCustomerDto: CreateCustomerDto): Customer {
    const { name, age } = createCustomerDto;
    const newCustomer: Customer = {
      id: uuid(),
      name,
      age,
      //...createCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
