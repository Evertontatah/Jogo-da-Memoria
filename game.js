function  ScoreBoardGameControl  ( ) {
	var  pontuação  =  0 ;
	var  POINT_GAME  =  10 ;
	var  TEXT_SCORE  =  "Pontuação: "

	var  TOTAL_CORRECT  =  10 ;
	var  corrige  =  0 ;

	isso . atualizaçãoPontuação  =   função  ( ) {
		var  scoreDiv  =  document . getElementById ( "pontuação" ) ;
		scoreDiv . innerHTML  =   TEXT_SCORE  +  pontuação ;
	}

	isso . incrementScore  =   function  ( ) {
		corrige ++ ;
		pontuação +=  POINT_GAME ;
		if  ( corrige  ==   TOTAL_CORRECT ) {
			alert ( "Fim de Jogo! Seu Score foi"  +  score ) ;
		}
	}

	isso . decrementScore  =   function  ( ) {
		pontuação -=  POINT_GAME ;
	}
}

função  Cartão ( imagem ) {
	var  FOLDER_IMAGES  =  'recursos/'
	var  IMAGE_QUESTION   =  "question.png"
	isso . imagem  =  imagem ;
	isso . visível  =  falso ;
	isso . bloco  =  falso ;

	isso . igual  =   função  ( jogo de cartas ) {
		if  ( this . picture . valueOf ( )  ==  cardGame . picture . valueOf ( ) ) {
			retorna  verdadeiro ;
		}
		retornar  falso ;
	}
	isso . getPathCardImage  =   function ( ) {
		retornar  FOLDER_IMAGES + imagem ;
	}
	isso . getQuestionImage  =   function ( ) {
		retornar  FOLDER_IMAGES + IMAGE_QUESTION ;
	}
}

função  ControllerLogicGame ( ) {
	var  firstSelected ;
	var  segundoSelecionado ;
	var  bloco  =  false ;
	var  TIME_SLEEP_BETWEEN_INTERVAL  =  1000 ;
	var  eventController  =  this ;

	isso . addEventListener  =   function  ( eventName ,  callback ) {
		eventController [ eventName ]  =  callback ;
	} ;

	isso . doLogicGame  =   function  ( cartão , retorno de chamada ) {
		if  ( ! card . block  &&  ! block )  {
			if  ( firstSelected  ==  null ) {
				firstSelected  =  cartão ;
				cartão . visível  =  verdadeiro ;
			} else  if  ( secondSelected  ==  null  &&  firstSelected  !=  card ) {
				segundoSelecionado  =  cartão ;
				cartão . visível  =  verdadeiro ;
			}

			if  ( firstSelected  !=  null  &&  secondSelected  !=  null ) {
				bloco  =  verdadeiro ;
				var  timer  =  setInterval ( function ( ) {
					if  ( secondSelected . equals ( firstSelected ) ) {
						primeiroSelecionado . bloco  =  verdadeiro ;
						segundoSelecionado . bloco  =  verdadeiro ;
						eventController [ "correto" ] ( ) ; 
					} senão {
						primeiroSelecionado . visível   =  falso ;
						segundoSelecionado . visível   =  falso ;
						eventController [ "errado" ] ( ) ;
					}        				  		
					firstSelected  =  null ;
					segundoSelecionado  =  null ;
					clearInterval ( temporizador ) ;
					bloco  =  falso ;
					eventController [ "mostrar" ] ( ) ;
				} , TIME_SLEEP_BETWEEN_INTERVAL ) ;
			} 
			eventController [ "mostrar" ] ( ) ;
		} ;
	} ;

}

função  CardGame  ( cartas  ,  controllerLogicGame , placar ) {
	var  LINHAS  =  4 ;
	var  COLS   =  5 ;
	isso . cartas  =  cartas ;
	var  logicGame  =  controllerLogicGame ;
	var  scoreBoardGameControl  =  scoreBoard ;

	isso . limpar  =  função  ( ) {
		var  jogo  =  documento . getElementById ( "jogo" ) ;
		jogo . innerHTML  =  '' ;
	}

	isso . mostrar  =   função  ( ) {
		isso . limpar ( ) ;
		scoreBoardGameControl . atualizaçãoPontuação ( ) ;
		var  cardCount  =  0 ;
		var  jogo  =  documento . getElementById ( "jogo" ) ;
		for ( var  i  =  0  ;  i  <  LINHAS ;  i ++ ) {
			for ( var  j  =  0  ;  j  <  COLS ;  j ++ ) {
				cartão  =  cartões [ cardCount ++ ] ;
				var  cardImage  =  document . createElement ( "img" ) ;
				if  ( cartão . visível ) {
					cartãoImagem . setAttribute ( "src " , card .getPathCardImage ( ) ) ;
				} senão {
					cartãoImagem . setAttribute ( "src " , card .getQuestionImage ( ) ) ;
				}
				cartãoImagem . onclick  =   ( função ( posição , jogo de cartas )  {
					 função de retorno ( )  {
						cartão  =  cartões [ posição ] ;
						var  retorno de chamada  =   function  ( ) {
							jogo de cartas . mostrar ( ) ;
						} ;
						jogo de lógica . addEventListener ( "correto" , função  ( ) {
							scoreBoardGameControl . incrementScore ( ) ;
							scoreBoardGameControl . atualizaçãoPontuação ( ) ;
						} ) ;
						jogo de lógica . addEventListener ( "errado" , function  ( ) {
							scoreBoardGameControl . decrementScore ( ) ;
							scoreBoardGameControl . atualizaçãoPontuação ( ) ;
						} ) ;

						jogo de lógica . addEventListener ( "mostrar" , function  ( ) {
							jogo de cartas . mostrar ( ) ;
						} ) ;

						jogo de lógica . doLogicGame ( cartão ) ;
						
					} ;
				} ) ( cardCount - 1 , this ) ;

				jogo . appendChild ( cardImage ) ;
			}
			var  br  =  documento . createElement ( "br" ) ;
			jogo . appendChild ( br ) ;
		}
	}
}

função  BuilderCardGame ( ) {
	var  imagens  =  new  Array  ( '10.png' , '10.png' ,
		'1.png' , '1.png' ,
		'2.png' , '2.png' ,
		'3.png' , '3.png' ,
		'4.png' , '4.png' ,
		'5.png' , '5.png' ,
		'6.png' , '6.png' ,
		'7.png' , '7.png' ,
		'8.png' , '8.png' ,
		'9.png' , '9.png' ) ;

	isso . doCardGame  =   function  ( ) {
		shufflePictures ( ) ;
		cartas   =  buildCardGame ( ) ;
		cardGame  =   new  CardGame ( cartões ,  novo  ControllerLogicGame ( ) ,  novo  ScoreBoardGameControl ( ) )
		jogo de cartas . limpar ( ) ;
		 jogo de cartas de retorno ;
	}

	var  shufflePictures  =  function ( ) {
		var  i  =  fotos . comprimento ,  j ,  tempi ,  tempj ;
		if  (  i  ==  0  )  return  false ;
		enquanto  (  -- eu  )  {
			j  =  matemática . andar (  Math . random ( )  *  (  i  +  1  )  ) ;
			tempi  =  imagens [ i ] ;
			tempj  =  imagens [ j ] ;
			imagens [ i ]  =  tempj ;
			imagens [ j ]  =  tempi ;
		}
	}

	var  buildCardGame  =   function  ( ) {
		var  contagemCartões  =  0 ;
		cartões  =   new  Array ( ) ;
		for  ( var  i  =  imagens . comprimento  -  1 ;  i  >=  0 ;  i -- )  {
			cartão  =   novo  Cartão ( fotos [ i ] ) ;
			cartões [ countCards ++ ]  =  cartão ;
		} ;
		 cartões de retorno ;
	}
}

função  GameControl  ( ) {

}

Controle de jogo . criarJogo  =  function ( ) {
	var  builderCardGame  =   new  BuilderCardGame ( ) ;
	cardGame  =  construtorCardGame . doCardGame ( ) ;
	jogo de cartas . mostrar ( ) ;
}
