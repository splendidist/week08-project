-- stored queries

-- CREATE RECIPES TABLE

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  username TEXT,
  title TEXT,
  category TEXT,
  hrs INT,
  ingredients TEXT,
  method TEXT
);

-- POPULATE RECIPES TABLE

INSERT INTO recipes (username, title, category, hrs, ingredients, method) VALUES
('Lucy', 
'Pancakes', 
'Breakfast', 
0.5, 
'300g self-raising flour
1 tsp baking powder
1 tbsp sugar (any kind)
1 tbsp vanilla extract
400ml oat, almond, or soya milk
1 tbsp vegetable oil for cooking', 
'1 Whisk the flour, baking powder, sugar, vanilla extract and a pinch of salt in a bowl until mixed. Slowly pour in the milk until you get a smooth, thick batter.
2 Heat a little of the oil in a non-stick frying pan over a medium-low heat, and add 2 tbsp batter into the pan at a time to make small, round pancakes. You will need to do this in batches of two-three at a time. Cook for 3-4 mins until the edges are set, and bubbles are appearing on the surface. Flip the pancakes over and cook for another 2-3 mins until golden on both sides and cooked through. Keep warm in a low oven while you cook the remaining pancakes.
3 Serve stacked with lots of toppings of your choice.'),
('Felicity', 
'Chilli', 
'Dinner', 
1, 
'3 tbsp olive oil
2 sweet potatoes, peeled and cut into medium chunks
2 tsp smoked paprika
2 tsp ground cumin
1 onion, chopped
2 carrots, chopped
2 celery sticks, chopped
2 garlic cloves, crushed
1-2 tsp chilli powder
1 tsp dried oregano
1 tbsp tomato purée
1 red pepper, cut into chunks
2 x 400g cans chopped tomatoes
400g can black beans, drained
400g can kidney beans, drained
lime wedges, guacamole, rice and coriander to serve', 
'1. Heat the oven to 200C/180C fan/gas 6. Put the chopped sweet potato in a roasting tin and drizzle over 1½ tbsp oil, 1 tsp smoked paprika and 1 tsp ground cumin. Mix everything so that the sweet potatoes are coated in spices. Season with salt and pepper, then roast for 25 mins until cooked.
2. Meanwhile, heat the remaining oil in a large saucepan over a medium heat. Add the onion, carrot and celery. Cook for 8-10 mins, stirring occasionally until soft, then crush in the garlic and cook for 1 min more. Add the remaining dried spices and tomato purée. Mix everything and cook for 1 min more.
3. Add the red pepper, chopped tomatoes and 200ml water. Bring the chilli to boil, then simmer for 20 mins. Add the beans and cook for another 10 mins before adding the sweet potato. Season to taste then serve with lime wedges, guacamole, rice and coriander.'),
('Keira', 
'Banana Bread', 
'Dessert', 
1, 
'3 large black bananas
75ml vegetable or sunflower oil
100g brown sugar
225g plain flour
3 heaped tsp baking powder
3 tsp cinnamon or mixed spice
50g dried fruit or nuts', 
'1. Heat oven to 200C/180C fan/gas 6. Mash the peeled bananas with a fork, then mix well with the vegetable/sunflower oil and brown sugar.
2. Add the flour, baking powder and cinnamon/mixed spice, and combine well. Add the dried fruit or nuts.
3. Bake in an oiled, lined 2lb loaf tin for 20 minutes. Check and cover with foil if the cake is browning.
4. Bake for another 20 minutes, or until a skewer comes out clean.
5. Allow to cool a little before slicing.');


-- CREATE COMMENTS TABLE

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  recipe_id INT,
  username TEXT,
  comment TEXT,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

--POPULATE COMMENTS TABLE

INSERT INTO recipe_comments (recipe_id, username, comment)
VALUES
(1, '', 'This recipe was delicious! I loved it.'),
(1, '', 'I made this last night and it was amazing.'),
(2, '', 'I think Ill try this recipe over the weekend.'),
(2, '', 'Not a fan of this recipe, it needs more seasoning.'),
(3, '', '');
(3, '', '');
(5, '', '');
(5, '', '');
