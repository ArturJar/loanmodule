### Moduł loan - propozycja wykonania
To do:
Poprawić service w user list, loan list by dobrze dodawał elementy.
Delete user w service do napisania.
Scalanie kolekcji w loan-list - linq, ZIP ? 

1. przerobić mocka z userami tak żeby korzystał z in memory-web-api (sporo do zrobienia - warto się wzorować na book module) - to do
1. stworzyć moduł ‘loan’(ng g module loan)  ++
1. stworzyć klasę Loan(id, userId, bookId) ++
1. zrobić mocka z 2-3 przykładowymi obiektami loan w in memory-web-api ++
1. stworzyć service loan (ng g service loan) z metodą do pobierania danych: trudniejsza rzecz – trzeba pobrać przez api informacje z 3 kolekcji(i je ze sobą scalić – używając linq) to do - obecnie wyświetla id'kami, scalić metodą Zip z linq?  
1. stworzyć component z listą wypożyczeń(ng g component loan-list) ++
1. dodać listę do routingu(navbar + routing module) ++
1. skorzystać z service’u, żeby ją uzupełnić ++
1. stworzyć component do dodawania wypożyczenia(ng g component add-loan) ++
1. dodać component add-loan jako nested component ++
1. można skorzystać z: [Tour of heroes - http module][th-http]


# Meet-ng2 - warsztaty Angular 2

Grupa .NET Politechniki Białostockiej we współpracy z firmą Intive zaprasza na serię warsztatów Angular 2. W tym miejscu znajdziecie wszystkie podstawowe informacje dotyczące aplikacji. Szczegółów dotyczących samych spotkań szukajcie na [fanpage'u Grupy .NET PB.][fp] oraz [Grupie .NET PB.][fp-group]

## Krótki tutorial jak skonfigurować i korzystać z tego repozytorium

Wszystkie spotkania podzielone są na tagi. Każde spotkanie będzie odpowiadało jednej wersji. Dzięki temu kiedy aplikacja przestanie Ci działać możesz szybko przejść do kolejnego/poprzedniego taga. Pozwoli to także odtworzyć Ci potem na spokojnie w domu co po kolei się działo w aplikacji.

### Konfigurowanie środowiska

#### Node.js + nuget package manager

Żeby uruchomić angulara-cli potrzebny jest Node.js w wersji 6.9.0 albo wyższej z NPM w wersji co najmniej 3. Sprawdzić wersję można poprzez wywołanie w konsoli odpowiednio:

```sh
node -v
```

```sh
npm -v
```

W przypadku gdy nie masz zainstalowanego Node, bądź wersja node lub npm który masz zainstalowaną jest starsza, zapraszamy na stronę [Node.js][node.js] - żeby pobrać nową wersję. Proponujemy ściągnąć wersję najnowszą – „Current”. Potem wystarczy po prostu ją zainstalować.

#### Angular CLI

Następnie należy sprawdzić wersję angulara-cli wpisując w konsoli:

```sh
ng -v
```

Potrzebujemy wersji co najmniej 1.0.0 – jeżeli posiadasz starszą wersję należy zaktualizować angular-cli. W wersji beta paczka nazywała się 'angular-cli' a w wersji stabilnej 'angular/cli'. Dlatego dla pewności spróbujemy usunąć i jedną i drugą wersję – jedna z nich spowoduje błąd – który oznacza po prostu, że taka paczka na komputerze nie jest zainstalowana – możemy go zignorować. Wywołajmy po kolei:

```sh
npm uninstall -g angular-cli
```

```sh
npm uninstall -g @angular-cli
```

następnie wyczyśćmy cache npm:

```sh
npm cache clean
```

i zainstalujmy nową wersję angulara cli:

```sh
npm install -g @angular/cli@latest
```

#### VS Code + git

Potrzebny nam będzie też Visual Studio Code, jeżeli nie masz go zainstalowanego możesz go ściągnąć ze strony [VS Code][vscode]. Do działania potrzebny nam będzie jeszcze git – żeby sprawdzić czy masz go zainstalowanego wystarczy w konsoli wywołać na przykład:

```sh
git –version
```

Jeżeli pojawi się błąd zainstaluj git ze strony [git-scm][git].

### Pobieranie repozytorium

Po pierwsze żeby zacząć korzystać z repozytorium musimy sobie wybrać miejsce gdzie chcemy przechowywać na dysku nasze przykłady, uruchomić w nim konsolę(w VS Code prawy klawisz w sekcji Explorer -> Open in Command Prompt albo Ctrl+`) i wywołać komendę:

```sh
git clone https://bitbucket.org/mateusz_stradalowicz_intive/meet-ng2-pb.git nazwa-folderu
```

pobierze on zawartość całego repozytorium wraz ze wszystkimi tagami(czyli tak na prawdę kodem ze wszystkich prelekcji które do tej pory się odbyły) i wrzuci do folderu 'nazwa-folderu' - jeżeli folder jeszcze nie istnieje utworzy go. Po pobraniu musimy pamiętać żeby zainstalować nasze wszystkie biblioteki. W tym celu wywołamy w konsoli wywołamy polecenie:

```sh
npm install
```

po zainstalowaniu bibliotek możemy uruchomić aplikację poleceniem:

```sh
ng serve
```

Tym sposobem udało nam się uruchomić aplikację którą możemy znaleźć pod adresem: localhost:4200.

>Projekt zawiera w sobie proponowane rozszerzenia których używamy podczas zajęć. Należy je zainstalować, żeby to zrobić przejdźmy w VS Code do zakładki extentions(Ctrl + Shift + X), a następnie w menu pomocniczym(trzy kropeczki na samej górze '...') wybierzmy 'Show Workspace Recommended Extenstions'. Należy zainstalować wszystkie z listy.

### Przełączanie się pomiędzy wersjami

Na początku wyświetlmy sobie listę tagów(ze spotkań, które się odbyły):

```sh
git tag
```

Żeby wybrać interesujący nas tag wywołamy:

```sh
git checkout 'nazwa-tagu'
```

>UWAGA! Przed przełączeniem się na inny tag musimy upewnić się, że nie mamy żadnych nie wcheckowanych zmian. W tym celu w VS Code możemy przejść do zakładki gita(Ctrl+Shift+G) i zobaczyć czy lista 'CHANGES' jest pusta. Jeżeli nie musimy wywołać polecenie wyczyścić zmiany - najłatwiej to zrobić poprzez naciśnięcie na pasku 'CHANGES' strałki 'undo'.

>W VS Code branch na którym obecnie się znajdujemy możemy zobaczyć na pasku w lewym dolnym rogu, klinkięcie na nazwę pozwala szybko zmienić tag na ten który nas interesuje.

### Synchronizowanie zmian

W międzyczasie w repozytorium mogły pojawić się zmiany, żeby zsynchronizować je z naszym lokalnym repozytorium wywołamy:

```sh
git pull
```

> Tą operację będziemy wykonywać przed każdym spotkaniem.



[git]: <https://git-scm.com/download/>
[vscode]: <https://code.visualstudio.com/>
[node.js]: <https://nodejs.org/>
[fp]: <https://www.facebook.com/Grupa.NETBialystok>
[fp-group]: <https://www.facebook.com/groups/200477320398470>
[th-http]: <https://angular.io/docs/ts/latest/tutorial/toh-pt6.html>
