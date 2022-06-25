import './filas-columnas.css';

export const FilasyColumnas = ({ selda1, selda2, selda3, selda4, selda5, selda6, selda7, selda8, selda9, selda10 }) => {
  return (
    <>
      <div className="row">
        <div class="col box1">
          {selda1}
        </div>
        <div class="col box2">
          {selda2}
        </div>
        <div class="col box3">
          {selda3}
        </div>
        <div class="col box4">
          {selda4}
        </div>
        <div class="col box5">
          {selda5}
        </div>
        <div class="col box6">
          {selda6}
        </div>
        <div class="col box7">
          {selda7}
        </div>
        <div class="col box8">
          {selda8}
        </div>
        <div class="col box9">
          {selda9}
        </div>
        <div class="col box10">
          {selda10}
        </div>
      </div>
    </>
  )
}