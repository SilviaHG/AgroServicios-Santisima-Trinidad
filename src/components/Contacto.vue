<template>
  <div>
    <div class="container">
      <div class="row align-items-start">
        <div class="col-12 col-md-6">
            <br>
          <div
            class="Container"
            style="
              background-color: #a6d07b;
              position: static;
              width: 500px;
              height: 600px;
              border-radius: 5px;
              border: 1px solid #a6d07b;
            "
          >
            <div class="row">
              <div class="col-12">
                <br />
                <div
                  class="container"
                  style="
                    background-color: white;
                    background-color: rgba(250,250,250,0.5);
                    position: static;
                    width: 450px;
                    height: 560px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                  "
                >
                <br>
                  <h3>Contáctenos:</h3>
                    <hr>
                  <div class="row">
                    <div class="col-12 col-md-3" style="text-align: right">
                      <img
                        alt="Vue logo"
                        src="@/assets/direccion.png"
                        width="30"
                        height="30"
                      />
                    </div>
                    <div class="col-12 col-md-9" style="text-align: left">
                      <p>Palmira, Carrillo Guanacaste, Costa Rica</p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12 col-md-3" style="text-align: right">
                      <img
                        alt="Vue logo"
                        src="@/assets/whatsapp.png"
                        width="30"
                        height="30"
                      />
                    </div>

                    <div class="col-12 col-md-9" style="text-align: left">
                      <p>861 0281</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-3" style="text-align: right">
                      <img
                        alt="Vue logo"
                        src="@/assets/telefono.png"
                        width="30"
                        height="30"
                      />
                    </div>

                    <div class="col-12 col-md-9" style="text-align: left">
                      <p>2203 1197</p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12 col-md-3" style="text-align: right">
                      <img
                        alt="Vue logo"
                        src="@/assets/gmail.png"
                        width="30"
                        height="30"
                      />
                    </div>
                    <div class="col-12 col-md-9" style="text-align: left">
                      <p>hernandezmorenojosemario@gmail.com</p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12 col-md-3" style="text-align: right">
                      <img
                        alt="Vue logo"
                        src="@/assets/facebook.png"
                        width="30"
                        height="30"
                      />
                    </div>
                    <div class="col-12 col-md-9" style="text-align: left">
                      <p>Agroservicos Santisima Trinidad</p>
                    </div>
                  </div>
                    <hr>
                  <div class="row">
                      
                    <div class="form-floating col-12 col-md-6">
                      <input style="width:200px; height:50px; outline: 0 none; "
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Nombre"
                      />
                      <label for="floatingInput"> Nombre</label>
                    </div>
                    <div class="form-floating mb-3 col-12 col-md-6" >
                      <input  style="width:200px; height:50px; "
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="nombre@ejemplo.com"
                      />
                      <label for="floatingInput"> Correo</label>
                    </div>

                    <div class="col">
                      <div class="form-floating">
                        <textarea style="width:410px; height:100px;"
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea"
                        ></textarea>
                        <label for="floatingTextarea">Comentarios</label>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                            <br><br>
                            <button type="submit" class="btn btn-primary "
                                id="btn-enviarinfo" style="background-color: #318BCA ; width:100px; height:50px; margin-top: 15px;border: none;color: aliceblue;">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

             


          </div>

            

          <br>
           
        </div>

        <div class="col-12 col-md-6">
            <br>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7845.630680770268!2d-85.57897992843147!3d10.515206018689783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9fd5af81e57785%3A0x2b4a8d626236092!2sAgroservicios%20Santisima%20Trinidad!5e0!3m2!1ses!2scr!4v1629250407393!5m2!1ses!2scr" 
          width="600" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            

        </div>

      </div>
       

    </div>
  </div>
</template>

<style >
#floatingInput{
 outline: none;
}

*:focus {
    outline: none;
}
</style>

<script>
export default {
  name: "contacto",
};
</script>