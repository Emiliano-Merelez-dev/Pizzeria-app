import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [
      { id: 1, name: 'Margarita', description: 'Tomate, mozzarella y albahaca', moreDescription: 'Ingredientes 250 g de harina de trigo. 5 g de sal fina. 5 g de azúcar. 5 g de levadura seca (o 15 g de levadura fresca). 150 ml de agua tibia. 1 cucharada de aceite de oliva. 200 g de tomates frescos o triturados en lata. 200 g de mozzarella fresca. Un puñado de hojas de albahaca fresca. Sal y pimienta al gusto. Aceite de oliva para finalizar', price: 500, image: '/images/Margarita.jpg' },
      { id: 2, name: 'Pepperoni', description: 'Pepperoni, tomate y queso mozzarella',moreDescription: 'Ingredientes 100 gr. de pepperoni 100 gr. de salami 200 gr. de queso mozzarella rallado 1 lata de tomate triturado 100 gr. de queso parmesano rallado 1 base de masa para pizza casera Sal Pimienta Orégano y Albahaca (opcional)', price: 600, image: '/images/Pepperoni.jpg' },
      { id: 3, name: 'Cuatro Quesos', description: 'Mozzarella, gorgonzola, parmesano y brie',moreDescription: '225 gramos de queso azul. 375 gramos de queso mozzarella. 150 gramos queso parmesano. 300 gramos de queso Ricotta.', price: 700, image: '/images/Cuatro.jpg' },
      { id: 4, name: 'Pizza Primavera', description: 'Mozzarella, aceitunas verdes, huevos y tomate cherry',moreDescription: 'Masa para pizza. Salsa de tomate, necesario. Queso mozzarella, rallado. Aceitunas verdes, cortadas por la mitad. Tomates cherry, cortados por la mitad. Espinacas frescas. 2 huevos, cocidos y rallados. Pimientos rojos, cortados en juliana. Champiñones frescos, en láminas. Aceite de oliva. Sal y pimienta, para sazonar al gusto. Albahaca fresca, para decorar.', price: 850, image: '/images/Primavera.jpg' },
      { id: 5, name: 'Pizza con huevo frito', description: 'Mozzarella, Champiñones, cebolla y Huevos',moreDescription: '200g de salsa de tomate 200g de queso mozzarella 2-4 huevos (dependiendo de cuántos quieras añadir) Ingredientes opcionales como jamón, champiñones, pimientos, cebolla, etc. Sal y pimienta al gusto. Aceite de oliva para freír los huevos', price: 1200, image: '/images/HuevoFri.jpg' },
      { id: 6, name: 'Pizza de calabresa', description: 'Mozzarella, salchicha o chorizo calabresa, aji picante',moreDescription: '500 g de harina de trigo 300 ml de agua tibia 1 cucharadita de sal 1 cucharadita de azúcar 1 cucharadita de levadura seca 3 cucharadas de aceite de oliva 200 g de salsa de tomate 200 g de queso mozzarella rallado 150 g de calabresa en rodajas 1 pimiento rojo en rodajas 1 cebolla en rodajas finas Orégano al gusto Aceitunas negras al gusto', price: 900, image: '/images/Calabresa.jpg' },
      { id: 7, name: 'Pizza de roquefort', description: 'Mozzarella, queso roquefort, nueces caramelizadas y pizca de pimienta negra molida',moreDescription: '1 masa para pizza 100 gramos de queso roquefort 100 gramos de queso mozzarella 1 cucharada de salsa de tomate 1 cucharada de aceite de oliva 1 puñado de nueces caramelizadas 1 pizca de sal 1 pizca de pimienta negra molida Hojas de albahaca fresca', price: 950, image: '/images/Roquefort.jpg' },
      { id: 8, name: 'Pizza de espinaca', description: 'Mozzarella, espinacas frescas, parmesano y deintes de ajo',moreDescription: '500 g de masa para pizza 200 g de espinacas frescas 150 g de queso mozzarella 50 g de queso parmesano rallado 2 cucharadas de aceite de oliva 1 diente de ajo Sal al gusto Pimienta al gusto 1 cucharadita de orégano seco', price: 600, image: '/images/Espinaca.jpg' },
      { id: 9, name: 'Pizza de choclo', description: 'Mozzarella, Cebolla picada y Choclo cremoso',moreDescription: '1 Masa para Pizza Lista (de paquete) 6 Lonjas de Jamón (de pierna) 1 Latas de Maíz listo (Puedes utilizar maíz desgranado tierno) 250 gramos de Queso Rallado (el de tu preferencia) 200 gramos de Queso Cremoso Una pizca de Sal Una pizca de Pimienta', price: 1100, image: '/images/Choclo.jpg' },
  ],
};

export const itemPizzaSlice = createSlice({
  name: 'itemPizza',
  initialState,
  reducers: {
 
  }
});


// Action creators are generated for each case reducer function
export const {  } = itemPizzaSlice.actions;