export const Card = () =>{
    const entidades = [{image:"./imagens/Steve.webp",nome: "Steve", tipo: "Jogador", descricao: "O personagem controlado pelo jogador"},
        {image:"./imagens/Porco.webp",nome:"Porco", tipo:"Animal",descricao:"Gosta de cenoura se elimnado da comida"},
        {image:"./imagens/Vacca.webp",nome:"Vaca",tipo :"Animal",descricao:"Gosta de trigo, pode usar um balde para coletar leite, se elimnada da comida"},
        {image:"./imagens/Ovelha.webp",nome:"Ovelha",tipo:"Animal",descricao:"Gosta de trigo, se tosqueada ou elimanda da la, e comida"},
        {image:"./imagens/Villager.webp",nome:"Villager",tipo:"NPC",descricao:"Vive em vilas,se tu oferece esmeraldas ou outro item pode trocar por outro"},
        {image:"./imagens/Creeper.webp",nome:"Creeper",tipo:"Monstro",descricao:"Seu ataque se consiste se aproxima dp jogador para começaruma contagem e expldoir,se eliminado da polvora"},
        {image:"./imagens/Zombie.webp",nome:"Zombie",tipo:"Monstro",descricao:"Seu ataque se consiste se aproximar e desferur ataques corpo a corpo se elimnado da carne podre(rarmente da junto uma cenoura)"},
        {image:"./imagens/Esqueleto.webp",nome:"Esqueleto",tipo:"Monstro",descricao:"Seu ataque se consiste em atirar flechas de longe,se elimnado da osso,flecha e as vezes um arco"},
        {image:"./imagens/Aranha.webp",nome:"Aranha",tipo:"Monstro",descricao:"Diferente de outros monstros a aranha e um mob neutro de dia que se torna agressivo a noite,Seu ataque se consiste se aproximar e da ataques corpo a corpa,sendo capaz de escalar,se elimnado da teia e olho de aranha"},
        {image:"./imagens/Enderman.webp",nome:"Enderman",tipo:"Monstro",descricao:"Diferente de outros monstros so te ataca se tu olhar para seus olhos ou se agredido,seu atauqe se consiste se aproximar e da ataques corpo a corpo, sendo capaz de se teletransportar,se elimnado da uma'Perola do ender'"}
    ]
 return (
    <div>
      {entidades.map((item, index) => (
        <div>
         
        </div>
      ))}
    </div>
  )
}