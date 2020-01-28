# zen-files

ZEN files necessary to inclue the project into INFINITY. Drag and drop the files into the studio and compile them.

Perform the builds of the different modules:

```bash
cd ../global-store && npm run build:umd
cd ../module-loader && npm run build
cd ../module && npm run:build:module:dev
```

Copy the following files into your LISPages folder:

```bash
mkdir ~/.../LISPages/modules
cp ../module/build/dynamic-import-module.js ~/.../LISPages/modules/module-a.js
cp ../module/build/dynamic-import-module.js ~/.../LISPages/modules/module-b.js
cp ../global-store/build/dist/global-store-1.0.0.js ~/.../LISPages/global-store-1.0.0.js
cp ../module-loader/build/dist/dynamic-import-module-loader-1.0.0.js ~/.../LISPages/dynamic-import-module-loader-1.0.0.js
```

Execute the following inserts:

```sql
insert into tsysresources (ID, LanguageID, ResourceID, ResourceText, Version, TS_TSDateTime, TS_TSUser) values ('lblTestingMenuEntry||en', 'en','lblTestingMenuEntry', 'Testing pages', 1, '20200127120000','GARCIAMO');
--
insert into tsysmenuentries (ID, Position, ResourceID, Split, Status, URL, UniqueID, rApplications, rMenuEntryParent, rModules, rsysPages, TS_TSDateTime, TS_TSUser) values (15000, 300, 'lblTestingMenuEntry', 1,1,null,15000,2,null, 14, null, '20200127120000','GARCIAMO');
--
insert into tsysresources (ID, LanguageID, ResourceID, ResourceText, Version, TS_TSDateTime, TS_TSUser) values ('lblIncludeModule||en', 'en','lblIncludeModule', 'Include Module', 1, '20200127120000','GARCIAMO');
--
insert into tsysmenuentries (ID, Position, ResourceID, Split, Status, URL, UniqueID, rApplications, rMenuEntryParent, rModules, rsysPages, TS_TSDateTime, TS_TSUser) values (15001, 301, 'lblIncludeModule', 1,1,'LISPages.testing.ImportModule',15001,2,15000, 14, 1500, '20200127120000','GARCIAMO');
```

open a cache terminal and execute:

```
Do ##class(co.sys.cUtilities).RegenerateCacheMsg()
```
