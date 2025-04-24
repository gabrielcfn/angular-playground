import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { ProductRemote } from '../dto/productRemote.dto';
import { provideHttpClient } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products', () =>{
    const mockProducts: ProductRemote[] = [
      { id: 1, title: 'Product 1', price: 10.0, description: 'Description 1', category: 'Category 1', image: 'image1.jpg' },
      { id: 2, title: 'Product 2', price: 20.0, description: 'Description 2', category: 'Category 2', image: 'image2.jpg' },
    ];

    service.getProducts().subscribe({
      next: (results) => {
        console.log('Results:', results);
        expect(results).toBeTruthy();
      }
    })

    const request = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(request.request.method).toBe('GET');
    request.flush(mockProducts); // Mock the HTTP response
 
  })
});
