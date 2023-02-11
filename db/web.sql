--
-- Database: `web`
--
CREATE DATABASE IF NOT EXISTS `web` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `web`;

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `meals`
--

CREATE TABLE `meals` (
  `id` int(11) NOT NULL,
  `title` varchar(40) NOT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `toppings` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '[]' CHECK (json_valid(`toppings`)),
  `imageUrl` varchar(255) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- הוצאת מידע עבור טבלה `meals`
--

INSERT INTO `meals` (`id`, `title`, `subtitle`, `price`, `toppings`, `imageUrl`, `isDeleted`) VALUES
(1, 'Meat Mix Pizza', 'Ham and Pepperoni', 12, '[{\"name\":\"Tomato\"},{\"name\":\"Mozzarella\"},{\"name\":\"Basil\"}]', 'https://www.bacinos.com/wp-content/uploads/2021/05/27-Meat-Lovers-Pizza-Recipes.jpg', 0),
(2, 'Margherita', 'Tomato, Mozzarella, Basil', 9, '[{\"name\":\"Tomato\"},{\"name\":\"Mozzarella\"},{\"name\":\"Basil\"}]', 'https://5.imimg.com/data5/SELLER/Default/2022/9/OC/ZR/IY/91775557/plant-based-vegan-mozzarella-cheese-1000x1000.png', 0),
(3, 'Pepperoni', 'Tomato, Mozzarella, Pepperoni', 12, '[{\"name\":\"Tomato\"},{\"name\":\"Mozzarella\"},{\"name\":\"Pepperoni\"}]', 'https://thumbs.dreamstime.com/b/pepperoni-pizza-top-view-cut-pieces-pepperoni-pizza-top-view-cut-pieces-isolated-white-170997851.jpg', 0),
(4, 'Vegetarian', 'Tomato, Mozzarella, Bell Peppers, Onions, Mushrooms', 11, '[{\"name\":\"Tomato\"},{\"name\":\"Mozzarella\"},{\"name\":\"Bell Peppers\"},{\"name\":\"Onions\"},{\"name\":\"Mushrooms\"}]', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I7DVHtbx-WXxNHOT6MLyz3Qo3fXuhh7uBwI073Lz&s', 0),
(5, 'Hawaiian', 'Tomato, Mozzarella, Pineapple, Ham', 13, '[{\"name\":\"Tomato\"},{\"name\":\"Mozzarella\"},{\"name\":\"Pineapple\"},{\"name\":\"Ham\"}]', 'https://thumbs.dreamstime.com/b/whole-isolated-italian-hawaiian-pizza-topped-pineapple-ham-mozzarella-cheese-tomato-topping-thick-pie-crust-80010915.jpg', 0),
(6, 'Meat Lovers', 'Tomato, Mozzarella, Pepperoni, Sausage, Bacon, Ham', 15, '[{\"name\":\"Tomato\"},{\"name\":\"Mozzarella\"},{\"name\":\"Pepperoni\"},{\"name\":\"Sausage\"},{\"name\":\"Bacon\"},{\"name\":\"Ham\"}]', 'https://media.istockphoto.com/id/1349560404/photo/meat-lover-pizza-with-pepperoni-ham-and-sausage.jpg?s=612x612&w=0&k=20&c=L_oKN9IHQ5LqpiBI8Jy8fIDVl4W2R2jX21hbuWZX5tU=', 0),
(7, 'BBQ Chicken', 'BBQ Sauce, Mozzarella, Chicken, Red Onion, Cilantro', 14, '[{\"name\":\"BBQ Sauce\"},{\"name\":\"Mozzarella\"},{\"name\":\"Chicken\"},{\"name\":\"Red Onion\"},{\"name\":\"Cilantro\"}]', 'https://thumbs.dreamstime.com/b/chicken-pizza-pan-spicy-125364336.jpg', 0);

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `list` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '\'[]\'',
  `isActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(40) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `meals`
--
ALTER TABLE `meals`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- אינדקסים לטבלה `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meals`
--
ALTER TABLE `meals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;