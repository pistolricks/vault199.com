$(document).ready(function(){
    interface DataStat {
        name: string;
        data_class1: number;
        data_class2: number;
        data_class3: number;
        data_class4: number;
        data_class5: number;
        data_class6: number;
        data_class7: number;
        data_class8: number;
        data_class9: number;
        data_class10: number;
    }

    let dataStats: DataStat[] = [
      {
        "name" : "data_general",
        "data_class1" : 2,
        "data_class2" : 0,
        "data_class3" : 0,
        "data_class4" : 0,
        "data_class5" : 0,
        "data_class6" : 22,
        "data_class7" : 22,
        "data_class8" : 1,
        "data_class9" : 91,
        "data_class10" : 5
      },
      {
        "name" : "data_quest",
        "data_class1" : 2,
        "data_class2" : 0,
        "data_class3" : 0,
        "data_class4" : 0,
        "data_class5" : 0,
        "data_class6" : 22,
        "data_class7" : 22,
        "data_class8" : 1,
        "data_class9" : 91,
        "data_class10" : 2
      },
      {
        "name" : "data_combat",
        "data_class1" : 2,
        "data_class2" : 0,
        "data_class3" : 0,
        "data_class4" : 0,
        "data_class5" : 0,
        "data_class6" : 22,
        "data_class7" : 22,
        "data_class8" : 1,
        "data_class9" : 91,
        "data_class10" : 3
      },
      {
        "name" : "data_crafting",
        "data_class1" : 2,
        "data_class2" : 0,
        "data_class3" : 0,
        "data_class4" : 0,
        "data_class5" : 0,
        "data_class6" : 22,
        "data_class7" : 22,
        "data_class8" : 1,
        "data_class9" : 91,
        "data_class10" : 4
      },
      {
        "name" : "data_crime",
        "data_class1" : 2,
        "data_class2" : 0,
        "data_class3" : 0,
        "data_class4" : 0,
        "data_class5" : 0,
        "data_class6" : 22,
        "data_class7" : 22,
        "data_class8" : 1,
        "data_class9" : 91,
        "data_class10" : 5
      }
    ];
  
   
    $('.item-list a').on('click', function(e: JQuery.ClickEvent){
      $('.item-list a').removeClass('active');
      $(e.currentTarget).addClass('active');
    });
  
    
    $('.item-list a').on('mouseenter', function(e: JQuery.MouseEnterEvent){
      let current_item = $(e.currentTarget).attr('class');
      for(let item in dataStats){
        if(dataStats[item].name == current_item){
          let container = $('.data-stats');
          let container2 = $('.weapon-placeholder');
          container.find('.data_class1').html(dataStats[item].data_class1.toString());
          container.find('.data_class2').html(dataStats[item].data_class2.toString());
          container.find('.data_class3').html(dataStats[item].data_class3.toString());
          container.find('.data_class4').html(dataStats[item].data_class4.toString());
          container.find('.data_class5').html(dataStats[item].data_class5.toString());
          container.find('.data_class6').html(dataStats[item].data_class6.toString());
          container.find('.data_class7').html(dataStats[item].data_class7.toString());
          container.find('.data_class8').html(dataStats[item].data_class8.toString());
          container.find('.data_class9').html(dataStats[item].data_class9.toString());
          container.find('.data_class10').html(dataStats[item].data_class10.toString());
        }
      }
    });
    
    
    $('.item-list a').on('mouseleave', function(){
          let container = $('.item-stats');
          let container2 = $('.weapon-placeholder');
          container.find('.data_class1').html("-");
          container.find('.data_class2').html("-");
          container.find('.data_class3').html("-");
          container.find('.data_class4').html("-");
          container.find('.data_class5').html("-");
          container.find('.data_class6').html("-");
          container.find('.data_class7').html("-");
          container.find('.data_class8').html("-");
          container.find('.data_class9').html("-");
          container.find('.data_class10').html("-");
      });
  

    $('.item-list a').on('mouseleave', function(){
        let current_item = $(':focus');
        current_item = $(':focus').attr('class') || '';
        for(let item in dataStats){
            if(dataStats[item].name + ' active' == current_item){
                let container = $('.data-stats');
                let container2 = $('.weapon-placeholder');
                container.find('.data_class1').html(dataStats[item].data_class1.toString());
                container.find('.data_class2').html(dataStats[item].data_class2.toString());
                container.find('.data_class3').html(dataStats[item].data_class3.toString());
                container.find('.data_class4').html(dataStats[item].data_class4.toString());
                container.find('.data_class5').html(dataStats[item].data_class5.toString());
                container.find('.data_class6').html(dataStats[item].data_class6.toString());
                container.find('.data_class7').html(dataStats[item].data_class7.toString());
                container.find('.data_class8').html(dataStats[item].data_class8.toString());
                container.find('.data_class9').html(dataStats[item].data_class9.toString());
                container.find('.data_class10').html(dataStats[item].data_class10.toString());
            }
        }
  });


})