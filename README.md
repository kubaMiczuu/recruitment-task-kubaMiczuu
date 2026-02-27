## Opis rozwiązania
W tym projekcie za naistotniejsze dane uznałem:
- zestawienie kategorii na podstawie tych, z których zakupy są najczęściej dokonywane. Pomaga to w analizie tego, które kategorie są najpopularniejsze wśród klientów i które mogą generować potencjalnie największy zysk.
  Do tego zestawienia użyłem wykresu kołowego (Pie Chart) bo świetnie pokazuje na kole jaką część zajmuje dana kategoria.
- analiza wydawanych pieniędzy na pojedyńczych zakupach. Ile klienci wydają, jaka jest średnia kwota wydawana na zakupach oraz jaka jest realna mediana. Pozwala to określić czy klienci wydają raczej większe czy mniejsze kwoty na pojedyńczych zakupach.
  Do tej analizy użyłem zwykłego wykresu słupkowego (Bar Chart) i pomocniczych linii referencyjnych do średniej i mediany.
- zestawienie klientów. Jak wielu jest powracających, a ilu nowych? Pokazuje to czy sklep sie rozwija i ma popracie wśród stałych klientów oraz czy sklep ma możliwość osiągania większych zasięgów dzieki nowym klientom.
  Do tego zestawienia użyłem wykresu pierścieniowego (Donut Chart), bo jasno i klarownie pokazuje stosunek nowych do powracających klientów.

## O projekcie:
Projekt napisany jest w frameworku React z stylowaniem Tailwind. Do tworzenia wykresów i analizy danych użyłem biblioteki "Recharts".

## Uruchomienie projektu
Aplikacja jest napisana lokalnie, po pobraniu należy wejść w folder projektu, otworzyc w terminalu i użyć poleceń:
- npm install
- npm install tailwindcss @tailwindcss/vite
- npm install recharts
