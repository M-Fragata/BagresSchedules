
export function renderSkeletonHours() {

  const skeletonHTML = `
  <div>
    <div>
        <span class="load-hour-animation">Carregando Horários . . .</span>
    </div>

      <div class="skeleton-loading">

        <div class="container-skeleton-loading">
          <p>Manhã</p>
          <div class="skeleton-loading-hours"></div>
          <div class="skeleton-loading-hours"></div>
          <div class="skeleton-loading-hours"></div>
          <div class="skeleton-loading-hours"></div>
        </div>

        <div class="container-skeleton-loading">
          <p>Tarde</p>
          <div class="skeleton-loading-hours"></div>
          <div class="skeleton-loading-hours"></div>
          <div class="skeleton-loading-hours"></div>
          <div class="skeleton-loading-hours"></div>
        </div>

        <div class="container-skeleton-loading">
          <p>Noite</p>
          <div class="skeleton-loading-hours"></div>
          <div class="skeleton-loading-hours"></div>
          <div class="skeleton-loading-hours"></div>
          <div class="skeleton-loading-hours"></div>
        </div>

      </div>

    </div>
    `
  return skeletonHTML
}