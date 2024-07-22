import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Tabs  } from "flowbite-react";
import ProductCard from "../components/ProductCard";

export default function DiscoverPage () {
    const tabsRef = useRef(null);
    // const categories = ['All categories', 'Art', 'Virtual Worlds', 'Collectibles', 'Utility', 'Gaming']
    const categories = [
      {
        _id: "6690e128ae5b28477ab34f33",
        name: "Mujeres",
        categoryCover: "https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg",
        subCategories: [
          {
            subCategoryName: "Todos",
            _id: "6690e128ae5b28477ab34ab1"
          },
          {
            subCategoryName: "Accesorios",
            subCategoryCover: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
            _id: "6690e128ae5b28477ab34f34"
          },
          {
            subCategoryName: "Camisetas",
            subCategoryCover: "https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg",
            _id: "6690e128ae5b28477ab34f35"
          },
          {
            subCategoryName: "Juveniles",
            subCategoryCover: "https://siman.vtexassets.com/arquivos/ids/5925479-1200-auto?v=638557263926900000&width=1200&height=auto&aspect=true",
            _id: "6690e128ae5b28477ab34f36"
          },
          {
            subCategoryName: "Ropa Interior",
            subCategoryCover: "https://siman.vtexassets.com/arquivos/ids/5525845-1600-auto?v=638515497802800000&width=1600&height=auto&aspect=true",
            _id: "6690e128ae5b28477ab34f37"
          },
          {
            subCategoryName: "Blusas",
            subCategoryCover: "https://siman.vtexassets.com/arquivos/ids/5525845-1600-auto?v=638515497802800000&width=1600&height=auto&aspect=true",
            _id: "6690e128ae5b28477zy43f73"
          },
          {
            subCategoryName: "Skin Care",
            subCategoryCover: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
            _id: "6690e128ae5b28477ab34f38"
          }
        ]
      },
      {
        _id: "6690e1c3ae5b28477ab34f41",
        name: "Hombres",
        categoryCover: "https://siman.vtexassets.com/arquivos/ids/5398898-1600-auto?v=638485353697030000&width=1600&height=auto&aspect=true",
        subCategories: [
          {
            subCategoryName: "Todos",
            _id: "6690e128ae5b28477ab34ba1"
          },
          {
            subCategoryName: "Accesorios",
            subCategoryCover: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
            _id: "6690e1c3ae5b28477ab34f42"
          },
          {
            subCategoryName: "Camisas",
            subCategoryCover: "https://siman.vtexassets.com/arquivos/ids/5398898-1600-auto?v=638485353697030000&width=1600&height=auto&aspect=true",
            _id: "6690e1c3ae5b28477ab34f43"
          },
          {
            subCategoryName: "Shorts",
            subCategoryCover: "https://siman.vtexassets.com/arquivos/ids/5376145-1600-auto?v=638481794239030000&width=1600&height=auto&aspect=true",
            _id: "6690e1c3ae5b28477ab34f44"
          },
          {
            subCategoryName: "Mochilas",
            subCategoryCover: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
            _id: "6690e1c3ae5b28477ab34f45"
          }
        ]
      },
      // {
      //   _id: "192867abc1",
      //   name: "Todos"
      // }
    ]
    const cards = [
      {
        _id: "668c2dd0e9973ee30adc3ebd",
        name: "Camisa Polo",
        category: "Hombres",
        subCategory: "Camisas",
        price: 15.49,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/4913680-1600-auto?v=638351373749570000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4913687-1600-auto?v=638351373760670000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4913685-1600-auto?v=638351373758300000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "S",
            color: "Blanca",
            stock: 10,
            _id: "668c2f30b6f00503e88fa2b2"
          },
          {
            size: "M",
            color: "Blanca",
            stock: 5,
            _id: "668c2f30b6f00503e88fa2b3"
          },
          {
            size: "L",
            color: "Blanco",
            stock: 5,
            _id: "668c2f30b6f00503e88fa2b4"
          },
          {
            size: "S",
            color: "Azul",
            stock: 8,
            _id: "668c2f30b6f00503e88fa2b5"
          },
          {
            size: "M",
            color: "Azul",
            stock: 7,
            _id: "668c2f30b6f00503e88fa2b6"
          }
        ]
      },
      {
        _id: "6690e018ae5b28477ab34f06",
        name: "Levi's Camiseta casual blanca estampado vintage para hombre",
        category: "Hombres",
        subCategory: "Camisas",
        price: 15.49,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/4162758-1600-auto?v=638175236086330000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4162760-1600-auto?v=638175236094000000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "S",
            color: "Blanco",
            stock: 10,
            _id: "6690e018ae5b28477ab34f07"
          },
          {
            size: "M",
            color: "Blanco",
            stock: 8,
            _id: "6690e018ae5b28477ab34f08"
          },
          {
            size: "L",
            color: "Blanco",
            stock: 7,
            _id: "6690e018ae5b28477ab34f09"
          },
          {
            size: "S",
            color: "Azul",
            stock: 5,
            _id: "6690e018ae5b28477ab34f0a"
          },
          {
            size: "M",
            color: "Azul",
            stock: 3,
            _id: "6690e018ae5b28477ab34f0b"
          },
          {
            size: "L",
            color: "Celeste",
            stock: 2,
            _id: "6690e018ae5b28477ab34f0c"
          }
        ]
      },
      {
        _id: "66920f3ab9eac8ab071c9d0d",
        name: "Calzoneta de baño estampada para hombre",
        category: "Hombres",
        subCategory: "Shorts",
        price: 24.95,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/4091291-1600-auto?v=638155338034870000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4091289-1600-auto?v=638155338027530000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4091288-1600-auto?v=638155338023130000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "S",
            color: "Blanco",
            stock: 2,
            _id: "66920f3ab9eac8ab071c9d0e"
          },
          {
            size: "M",
            color: "Blanco",
            stock: 3,
            _id: "66920f3ab9eac8ab071c9d0f"
          },
          {
            size: "S",
            color: "Azul",
            stock: 5,
            _id: "66920f3ab9eac8ab071c9d10"
          },
          {
            size: "M",
            color: "Azul",
            stock: 3,
            _id: "66920f3ab9eac8ab071c9d11"
          }
        ]
      },
      {
        _id: "669213074a8358506a401f96",
        name: "HIDRA-TOTAL 5 Crema de día - Crema humectante",
        category: "Mujeres",
        subCategory: "Skin Care",
        price: 13.95,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/370545-1600-auto?v=637250972188800000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5194087-1600-auto?v=638436913742670000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5194089-1600-auto?v=638436913996330000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "none",
            color: "none",
            stock: 5,
            _id: "669213074a8358506a401f97"
          }
        ]
      },
      {
        _id: "669216234a8358506a401fab",
        name: "Créme Hydratante et Nourrissante Crema corporal y rostro",
        category: "Mujeres",
        subCategory: "Skin Care",
        price: 7,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/3323805-1600-auto?v=637981643829130000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/924708-1600-auto?v=637394934673930000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "none",
            color: "none",
            stock: 3,
            _id: "669216234a8358506a401fac"
          }
        ]
      },
      {
        _id: "669216644a8358506a401faf",
        name: "Crema Hidratante Corporal Flor de Vainilla Mediterranea",
        category: "Mujeres",
        subCategory: "Skin Care",
        price: 7,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/2626617-1600-auto?v=637806394273830000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "none",
            color: "none",
            stock: 2,
            _id: "669216644a8358506a401fb0"
          }
        ]
      },
      {
        _id: "6692171c4a8358506a401fb3",
        name: "Reloj Nine West análogo",
        category: "Mujeres",
        subCategory: "Accesorios",
        price: 7,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/3816455-1600-auto?v=638088753746200000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/3816456-1600-auto?v=638088754226030000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "none",
            color: "none",
            stock: 4,
            _id: "6692171c4a8358506a401fb4"
          }
        ]
      },
      {
        _id: "669217b54a8358506a401fb7",
        name: "Reloj Nine West análogo metálico",
        category: "Mujeres",
        subCategory: "Accesorios",
        price: 44.92,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/385142-1600-auto?v=637253649329070000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/385143-1600-auto?v=637253649334530000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/2824516-1600-auto?v=637862370394600000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/2824517-1600-auto?v=637862370397870000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/2824518-1600-auto?v=637862370400200000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "none",
            color: "Dorado",
            stock: 5,
            _id: "669217b54a8358506a401fb8"
          }
        ]
      },
      {
        _id: "66921d034a8358506a401fbb",
        name: "Blusa crop top gris manga larga",
        category: "Mujeres",
        subCategory: "Blusas",
        price: 19.9,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/5925459-1600-auto?v=638557263865700000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5925460-1600-auto?v=638557263869530000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5925461-1600-auto?v=638557263872600000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "S",
            color: "Gris",
            stock: 2,
            _id: "66921d034a8358506a401fbc"
          },
          {
            size: "M",
            color: "Gris",
            stock: 3,
            _id: "66921d034a8358506a401fbd"
          },
          {
            size: "L",
            color: "Gris",
            stock: 5,
            _id: "66921d034a8358506a401fbe"
          },
          {
            size: "XL",
            color: "Gris",
            stock: 3,
            _id: "66921d034a8358506a401fbf"
          }
        ]
      },
      {
        _id: "66921ddd4a8358506a401fc2",
        name: "Blusa crop top blanca de tirantes para mujer",
        category: "Mujeres",
        subCategory: "Blusas",
        price: 12.9,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/5509534-1600-auto?v=638512070963270000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5509535-1600-auto?v=638512070966570000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5509536-1600-auto?v=638512070968930000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "XS",
            color: "Blanco",
            stock: 4,
            _id: "66921ddd4a8358506a401fc3"
          },
          {
            size: "S",
            color: "Blanco",
            stock: 2,
            _id: "66921ddd4a8358506a401fc4"
          },
          {
            size: "M",
            color: "Blanco",
            stock: 3,
            _id: "66921ddd4a8358506a401fc5"
          },
          {
            size: "L",
            color: "Blanco",
            stock: 5,
            _id: "66921ddd4a8358506a401fc6"
          }
        ]
      },
      {
        _id: "66921e8d4a8358506a401fc9",
        name: "Set de aretes bicolor",
        category: "Mujeres",
        subCategory: "Accesorios",
        price: 7.9,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/5811805-1600-auto?v=638527606029030000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5811804-1600-auto?v=638527606021370000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5811802-1600-auto?v=638527606013700000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5811800-1600-auto?v=638527606006330000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "none",
            color: "none",
            stock: 5,
            _id: "66921e8d4a8358506a401fca"
          }
        ]
      },
      {
        _id: "66921ff94a8358506a402009",
        name: "Set de 5 bikinis multicolor",
        category: "Mujeres",
        subCategory: "Ropa Interior",
        price: 25.9,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/5512218-1600-auto?v=638512949563070000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5512221-1600-auto?v=638512949570670000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5512224-1600-auto?v=638512949578400000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "S",
            color: "Multicolor",
            stock: 5,
            _id: "66921ff94a8358506a40200a"
          },
          {
            size: "M",
            color: "Multicolor",
            stock: 5,
            _id: "66921ff94a8358506a40200b"
          },
          {
            size: "L",
            color: "Multicolor",
            stock: 5,
            _id: "66921ff94a8358506a40200c"
          }
        ]
      },
      {
        _id: "669220a24a8358506a402030",
        name: "Tanga color negro Calvin Klein",
        category: "Mujeres",
        subCategory: "Ropa Interior",
        price: 19.9,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/4188875-1600-auto?v=638181439027830000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4188876-1600-auto?v=638181439030500000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "S",
            color: "Negro",
            stock: 5,
            _id: "669220a24a8358506a402031"
          },
          {
            size: "M",
            color: "Negro",
            stock: 5,
            _id: "669220a24a8358506a402032"
          },
          {
            size: "L",
            color: "Negro",
            stock: 5,
            _id: "669220a24a8358506a402033"
          }
        ]
      },
      {
        _id: "669221ae4a8358506a402036",
        name: "Camiseta Only estampada manga",
        category: "Mujeres",
        subCategory: "Camisetas",
        price: 16.9,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/5402485-1600-auto?v=638488129238570000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5402480-1600-auto?v=638488129226200000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "XS",
            color: "Blanco",
            stock: 1,
            _id: "669221ae4a8358506a402037"
          },
          {
            size: "S",
            color: "Blanco",
            stock: 4,
            _id: "669221ae4a8358506a402038"
          },
          {
            size: "M",
            color: "Blanco",
            stock: 2,
            _id: "669221ae4a8358506a402039"
          },
          {
            size: "L",
            color: "Blanco",
            stock: 1,
            _id: "669221ae4a8358506a40203a"
          }
        ]
      },
      {
        _id: "669222454a8358506a40203d",
        name: "Camiseta Active Basic tank top rayada",
        category: "Mujeres",
        subCategory: "Camisetas",
        price: 12.9,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/5452624-1600-auto?v=638496754767900000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5452625-1600-auto?v=638496754770270000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "XS",
            color: "Bicolor Blanco/Negro",
            stock: 5,
            _id: "669222454a8358506a40203e"
          },
          {
            size: "S",
            color: "Bicolor Blanco/Negro",
            stock: 4,
            _id: "669222454a8358506a40203f"
          },
          {
            size: "M",
            color: "Bicolor Blanco/Negro",
            stock: 2,
            _id: "669222454a8358506a402040"
          },
          {
            size: "L",
            color: "Bicolor Blanco/Negro",
            stock: 4,
            _id: "669222454a8358506a402041"
          }
        ]
      },
      {
        _id: "669223614a8358506a402070",
        name: "Reloj smartwatch Redmi watch 3 Active",
        category: "Hombres",
        subCategory: "Accesorios",
        price: 39,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/4728320-1600-auto?v=638313611308300000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4728321-1600-auto?v=638313611310500000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4728323-1600-auto?v=638313611315530000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "none",
            color: "Gris",
            stock: 5,
            _id: "669223614a8358506a402071"
          }
        ]
      },
      {
        _id: "6692244e4a8358506a402074",
        name: "Short deportivo azul Nike",
        category: "Hombres",
        subCategory: "Shorts",
        price: 39.9,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/4288637-1600-auto?v=638205667271770000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4288638-1600-auto?v=638205667275300000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4288639-1600-auto?v=638205667278730000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/4288641-1600-auto?v=638205667285770000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "S",
            color: "Azul",
            stock: 5,
            _id: "6692244e4a8358506a402075"
          },
          {
            size: "M",
            color: "Azul",
            stock: 5,
            _id: "6692244e4a8358506a402076"
          },
          {
            size: "L",
            color: "Azul",
            stock: 5,
            _id: "6692244e4a8358506a402077"
          },
          {
            size: "XL",
            color: "Azul",
            stock: 5,
            _id: "6692244e4a8358506a402078"
          }
        ]
      },
      {
        _id: "669225ee4a8358506a4020b2",
        name: "Mochila deportiva Umbro alianza",
        category: "Hombres",
        subCategory: "Mochilas",
        price: 35.9,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/5062939-1600-auto?v=638400614943170000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5062942-1600-auto?v=638400614951830000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5062943-1600-auto?v=638400614954000000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5062944-1600-auto?v=638400614957730000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "none",
            color: "Negra",
            stock: 5,
            _id: "669225ee4a8358506a4020b3"
          }
        ]
      },
      {
        _id: "669226664a8358506a4020b6",
        name: "Mochila nenra ometto",
        category: "Hombres",
        subCategory: "Mochilas",
        price: 36.95,
        images: [
          "https://siman.vtexassets.com/arquivos/ids/5939670-1600-auto?v=638563019525370000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5939671-1600-auto?v=638563019528170000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5939672-1600-auto?v=638563019530500000&width=1600&height=auto&aspect=true",
          "https://siman.vtexassets.com/arquivos/ids/5939673-1600-auto?v=638563019533170000&width=1600&height=auto&aspect=true"
        ],
        stockInfo: [
          {
            size: "none",
            color: "Negra",
            stock: 5,
            _id: "669226664a8358506a4020b7"
          }
        ]
      }
    ]
    const [selectedCategory, setSelectedCategory] = useState('Mujeres');
    const [selectedSubCategory, setSelectedSubCategory] = useState('Todos');
    const [filteredCards, setFilteredCards] = useState([]);
    const [search, setSearch] = useState('')

    // const navigate = useNavigate();

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = (e)=> {
      e.preventDefault()
      console.log(search);
    }

    const handleTabChange = useCallback((tab) => {
      setSelectedSubCategory('Todos');
      if (tab === 0) {
        setSelectedCategory('Mujeres');
      } else {
        setSelectedCategory('Hombres');
      }
    }, []);
    const filterProductsBySubCategory = (subCategory) => {
      setSelectedSubCategory(subCategory)
    };

    useEffect(()=> {
      if (selectedSubCategory === "Todos") {
          return setFilteredCards(cards.filter(card => card.category === selectedCategory))
      }
      setFilteredCards(cards.filter(card => card.subCategory === selectedSubCategory && card.category === selectedCategory ))
    }, [selectedCategory, selectedSubCategory])
    
    // useEffect(() => {
    //   if (selectedCategory) {
    //     setFilteredCards(cards.filter(card => card.category === selectedCategory))
    //   }
    // }, [selectedCategory]);

    return (
        <>
          <section className="flex justify-center">
            <div className="flex flex-col justify-between gap-5 w-full max-w-[1050px]">
              <div className="flex flex-col justify-between items-start gap-5 p-2 w-full">
                  <h1 className="text-4xl font-bold">Descubre nueva ropa</h1>
                  <h2 className="w-full h-auto text-left text-2xl">Encuentra a traves de nuestro ecommerce las prendas que necesites para complementar tus nuevos outfits.</h2>
              </div>  
              <form className="w-full mx-auto gap-2" onSubmit={handleSearch}>   
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
                  <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input type="search" id="default-search" className="block w-full p-4 ps-10 text-title text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Busca las prendas que necesites..." value={search} onChange={handleChange} required/>
                      <button type="submit" className="h-full text-white absolute end-0 bottom-0 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-title p-4">Search</button>
                  </div>
              </form>
              <div className="flex flex-col justify-between w-full max-w-[710px]">
                  <Tabs aria-label="Default tabs" variant="default" className="text-title" ref={tabsRef} onActiveTabChange={handleTabChange}>
                    {categories.map((categ)=> (
                        <Tabs.Item key={categ._id} title={categ.name} className="text-title">
                          <div className="flex items-center justify-between py-4 md:py-8 flex-wrap">
                            {categ.subCategories?.map((item)=>(
                                <button key={item._id} type="button" className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-call-to-action rounded-full text-title font-medium px-5 py-2.5 text-center me-3 mb-3" onClick={()=> filterProductsBySubCategory(item.subCategoryName)}>{item.subCategoryName}</button>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {filteredCards.map((item) => (
                                <ProductCard key={item._id} title={item.name} productImage={item.images[0]} price={item.price} linkTo={item._id} />
                            ))}
                          </div>
                        </Tabs.Item>
                    ))}
                  </Tabs>
              </div>
              {/* <div className="flex flex-col justify-between w-full max-w-[1050px]">
                  <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                      {categories.map((categ, index)=> (
                          <button key={index} type="button" className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-call-to-action rounded-full text-title font-medium px-5 py-2.5 text-center me-3 mb-3" onClick={()=> filterProducts(categ)}>{categ}</button>
                      ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {filteredCards.map((item, index) => (
                          <ProductCard key={index} title={item.title} productImage={item.image} price={item.price} linkTo={item.title} />
                      ))}
                  </div>
              </div> */}
            </div>
          </section>
        </>
    )
}