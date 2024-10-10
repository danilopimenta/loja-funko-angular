import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Funko Pop Astro Boy',
      description: 'Um aventureiro espacial em miniatura.',
      price: 59.99,
      image: 'https://geekfanaticos.fbitsstatic.net/img/p/funko-pop-rm-butter-279-bts-pop-rocks-73673/260161.jpg?w=540&h=540&v=no-change&qs=ignore',
    },
    {
      id: 2,
      name: 'Funko Pop Ninja Shadow',
      description: 'O ninja sombrio pronto para a ação.',
      price: 49.99,
      image: 'https://m.media-amazon.com/images/I/71fNGsbLp5L._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 3,
      name: 'Funko Pop Robotron',
      description: 'O robô amigo de todos.',
      price: 54.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-18-7FL_7N6qESn0T8ljcySFPru4XPtcEQ&s',
    },
    {
      id: 4,
      name: 'Funko Pop Princess Lune',
      description: 'A princesa do reino lunar.',
      price: 58.99,
      image: 'https://storage.geralgeek.com.br/images/venda/Funko-Pop-Michael-Jackson-Superbowl--657092cdca6a6.jpg',
    },
    {
      id: 5,
      name: 'Funko Pop Captain Blaze',
      description: 'O capitão mais destemido dos mares.',
      price: 62.99,
      image: 'https://cdn.awsli.com.br/600x700/84/84034/produto/127490845/funko-pop--marvel-blade-886-exclusivo-c-1--800-h7vzre1k3f.jpg',
    },
    {
      id: 6,
      name: 'Funko Pop Mystic Dragon',
      description: 'O dragão místico guardião das montanhas.',
      price: 67.99,
      image: 'https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dw90f1fcbe/images/funko/page-designer/hero/Landing%20Page%20Hero/PYS_NFL_WEB_HomepageBanner_%20CharacterA.png',
    },
    {
      id: 7,
      name: 'Funko Pop Cyber Punk',
      description: 'O rebelde das ruas futuristas.',
      price: 53.99,
      image: 'https://cdn.awsli.com.br/2500x2500/53/53761/produto/25380065/46c73783db.jpg',
    },
    {
      id: 8,
      name: 'Funko Pop Galaxy Surfer',
      description: 'O surfista que viaja pelas galáxias.',
      price: 61.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbU9z8xLeYtz3sOp5hYpqmMsLWYLxjUWMpjA&s',
    },
    {
      id: 9,
      name: 'Funko Pop Forest Elf',
      description: 'O elfo guardião das florestas.',
      price: 56.99,
      image: 'https://a-static.mlcdn.com.br/450x450/kit-8-funko-pop-stranger-things-serie-netflix-original/bbcards/brq0357kt/bff5797cd59f4099009743c68088382e.jpeg',
    },
    {
      id: 10,
      name: 'Funko Pop Desert Raider',
      description: 'O explorador das dunas infinitas.',
      price: 59.99,
      image: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwea9d343d/images/funko/upload/77384a_POPMarvel_Loki_S2_POP6_GLAM-WEB.png?sw=800&sh=800',
    },
    {
      id: 11,
      name: 'Funko Pop Aqua Queen',
      description: 'A rainha dos mares profundos.',
      price: 64.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoAhhaF51XiXEmlVuIbyWM6c3-fNaoGwKZw&s',
    },
    {
      id: 12,
      name: 'Funko Pop Shadow Knight',
      description: 'O cavaleiro que surge nas sombras.',
      price: 66.99,
      image: 'https://rihappy.vtexassets.com/arquivos/ids/402980-800-auto?v=637075376367970000&width=800&height=auto&aspect=true',
    },
    {
      id: 13,
      name: 'Funko Pop Solar Mage',
      description: 'O mago que controla o poder do sol.',
      price: 68.99,
      image: 'https://m.media-amazon.com/images/I/81OwcX8OraL._AC_UF894,1000_QL80_.jpg',
    }
  ];

  constructor() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    } else {
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
