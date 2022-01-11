-- create database compra;
use compra;
desc itens_compra;
select * from compra;
select * from itens_compra;
select * from compra;
select * from itens_compra ic join compra c on c.id = ic.id_compra;
insert into compra values (1, 1, '2021-06-13', 'A_VISTA', 10, 10);
insert into itens_compra values (2, 1, 2, 1, 0);