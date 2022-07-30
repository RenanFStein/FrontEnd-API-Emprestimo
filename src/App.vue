<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
        <header>
      

        <div>


          <nav class="p-3">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/bancos">Bancos</RouterLink>
            <RouterLink to="/solicitacoes">Solicitações</RouterLink>
            <RouterLink to="/parcelas">Parcelas</RouterLink>
          </nav>
        </div>
      </header>

      <RouterView />
  </div>
</template>

<style>
.shadow{
  border-radius: 22px;
}

.shadow:hover{
  background-color: rgba(0, 93, 199, 0.089);

}

a {
  padding: 12px 24px;
  text-decoration: none;
  color:aliceblue

}

</style>
