import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<import("./product.entity").Product[]>;
    get(id: number): Promise<import("./product.entity").Product>;
    create(createProductDto: CreateProductDto): Promise<import("./product.entity").Product>;
    update(updateProductDto: UpdateProductDto, id: number): Promise<any>;
    delete(id: number): Promise<any>;
}
