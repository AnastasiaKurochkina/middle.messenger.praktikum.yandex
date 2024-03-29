import Block from '../../core/Block';

type IServerErrorProps = {}
export class ServerError extends Block<IServerErrorProps> {
  constructor(props: IServerErrorProps) {
    super(props);
  }

  protected render(): string {
    return `<div class="container-error">
    <h1 class="container-error__code">500</h1>
    <h2 class="container-error__description">Мы уже фиксим</h2>
    <a class="container-error__link">Назад к чатам</a>
  </div>
  `;
  }
}
