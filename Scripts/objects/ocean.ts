module objects {
    export class Ocean extends objects.GameObject {
        // private instance variables
        private verticalSpeed:number;
        private horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("ocean");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if (managers.Game.scoreBoard.Level != 2)
            {
                if(this.y >=0) {
                this.Reset();
            }
        }
            if (managers.Game.scoreBoard.Level == 2)
            {
                if(this.x >=0) {
                    this.Reset();
                }
            }   
        }

        private _move():void {
            if (managers.Game.scoreBoard.Level != 2)
            {
            this.y += this.verticalSpeed;
            }
            if (managers.Game.scoreBoard.Level == 2)
            {
            this.x += this.horizontalSpeed;
            }
        }

        // public methods

        public Reset(): void {
            if (managers.Game.scoreBoard.Level != 2)
            {
            this.y = -960;
            }
            if (managers.Game.scoreBoard.Level == 2)
            {
                this.x = 0;
            }
        }        
        
        public Start(): void {
            this.Reset();
            this.verticalSpeed = 5; // 5 px per frame
            this.horizontalSpeed = -5;
            // if (managers.Game.scoreBoard.Level == 2)
            // {
            //     this.rotation = 90;
            // } 

        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}