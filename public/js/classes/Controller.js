function Controller(type){
  switch(type){
    case "circle-button":
      this.x = undefined;
      this.y = undefined;
      this.radius = undefined;
      this.id = undefined;
      this.label = undefined;
      this.labelColor = undefined;
      this.labelSize = undefined;
      this.labelFont = undefined;
      this.color = undefined;
      this.holdColor = undefined;
      this.holdLabelColor = undefined;
      this.type = type;
      this.paint = undefined;
      this.previousValue = false;

      this.setId = function(id){
        this.id = id;
      }

      this.setPosition = function(x, y){
        this.x = x;
        this.y = y;
      }

      this.setRadius = function(r){
        this.radius = r;
      }

      this.setColor = function(c){
        this.color = c;
      }

      this.setData = function(id, x, y, r, c){
        this.setId(id);
        this.setPosition(x, y);
        this.setRadius(r);
        this.setColor(c);
      }

      this.setHoldColors = function(c, lc){
        this.holdColor = c;
        this.holdLabelColor = lc;
      }

      this.setLabelText = function(text){
        this.label = text;
      }

      this.setLabelSize = function(size){
        this.labelSize = size;
      }

      this.setLabelFont = function(font){
        this.labelFont = font;
      }

      this.setLabelColor = function(color){
        this.labelColor = color;
      }

      this.setLabel = function(text, size, font, color){
        this.setLabelText(text);
        this.setLabelSize(size);
        this.setLabelFont(font);
        this.setLabelColor(color);
      }

      this.draw = function(paint){
        this.paint = paint;
        this.paint.circButton(this.id, this.x, this.y, this.radius, this.color);
        if(this.label != undefined){
          this.paint.text(this.label, this.x, this.y, this.labelColor, this.labelSize, this.labelFont, "centered");
        }
      }

      this.pressed = function(){
        var state = this.paint.getButtonState(this.id);
        if(this.previousValue != state && state == true){
          this.previousValue = state;
          return true;
        } else {
          this.previousValue = state;
          return false;
        }
      }

      this.held = function(){
        this.previousValue = this.paint.getButtonState(this.id);
        return this.paint.getButtonState(this.id);
      }
      break;
    case "rectangle-button":
      this.x = undefined;
      this.y = undefined;
      this.w = undefined;
      this.h = undefined;
      this.id = undefined;
      this.label = undefined;
      this.labelColor = undefined;
      this.labelSize = undefined;
      this.labelFont = undefined;
      this.color = undefined;
      this.holdColor = undefined;
      this.holdLabelColor = undefined;
      this.type = type;
      this.paint = undefined;
      this.previousValue = false;

      this.setId = function(id){
        this.id = id;
      }

      this.setPosition = function(x, y){
        this.x = x;
        this.y = y;
      }

      this.setDimensions = function(w, h){
        this.w = w;
        this.h = h;
      }

      this.setColor = function(c){
        this.color = c;
      }

      this.setData = function(id, x, y, w, h, c){
        this.setId(id);
        this.setPosition(x, y);
        this.setDimensions(w, h);
        this.setColor(c);
      }

      this.setHoldColors = function(c, lc){
        this.holdColor = c;
        this.holdLabelColor = lc;
      }

      this.setLabelText = function(text){
        this.label = text;
      }

      this.setLabelSize = function(size){
        this.labelSize = size;
      }

      this.setLabelFont = function(font){
        this.labelFont = font;
      }

      this.setLabelColor = function(color){
        this.labelColor = color;
      }

      this.setLabel = function(text, size, font, color){
        this.setLabelText(text);
        this.setLabelSize(size);
        this.setLabelFont(font);
        this.setLabelColor(color);
      }

      this.draw = function(paint){
        this.paint = paint;
        if(this.paint.getButtonState(this.id)){
          this.paint.rectButton(this.id, this.x, this.y, this.w, this.h, this.holdColor);
        } else {
          this.paint.rectButton(this.id, this.x, this.y, this.w, this.h, this.color);
        }
        if(this.label != undefined){
          if(this.paint.getButtonState(this.id)){
            this.paint.text(this.label, this.x + (this.w / 2), this.y + (this.h / 2), this.holdLabelColor, this.labelSize, this.labelFont, "centered");
          } else {
            this.paint.text(this.label, this.x + (this.w / 2), this.y + (this.h / 2), this.labelColor, this.labelSize, this.labelFont, "centered");
          }
        }
      }

      this.pressed = function(){
        var state = this.paint.getButtonState(this.id);
        if(this.previousValue != state && state == true){
          this.previousValue = state;
          return true;
        } else {
          this.previousValue = state;
          return false;
        }
      }

      this.held = function(){
        this.previousValue = this.paint.getButtonState(this.id);
        return this.paint.getButtonState(this.id);
      }
      break;
    case "joystick":
      this.x = undefined;
      this.y = undefined;
      this.outerRadius = undefined;
      this.innerRadius = undefined;
      this.id = undefined;
      this.outerColor = undefined;
      this.innerColor = undefined;
      this.type = type;
      this.paint = undefined;
      this.values = {
        xaxis:0,
        yaxis:0
      };

      this.setId = function(id){
        this.id = id;
      }

      this.setPosition = function(x, y){
        this.x = x;
        this.y = y;
      }

      this.setOuterRadius = function(r){
        this.outerRadius = r;
      }

      this.setInnerRadius = function(r){
        this.innerRadius = r;
      }

      this.setOuterColor = function(c){
        this.outerColor = c;
      }

      this.setInnerColor = function(c){
        this.innerColor = c;
      }

      this.setData = function(id, x, y, or, ir, oc, ic){
        this.setId(id);
        this.setPosition(x, y);
        this.setOuterRadius(or);
        this.setInnerRadius(ir);
        this.setOuterColor(oc);
        this.setInnerColor(ic);
      }

      this.setValues = function(xa, ya){
        this.values.xaxis = xa;
        this.values.yaxis = ya;
      }

      this.draw = function(paint){
        this.paint = paint;
        this.paint.circButton(this.id, this.x, this.y, this.outerRadius, this.outerColor);
        if(this.held()){
          var x = touches[this.paint.getButtonTouches(this.id)[0]].x;
          var y = touches[this.paint.getButtonTouches(this.id)[0]].y;
          this.paint.circle(x, y, this.innerRadius, this.innerColor);
          this.setValues(Math.floor(x - this.x), Math.floor(this.y - y));
        } else {
          this.paint.circle(this.x, this.y, this.innerRadius, this.innerColor);
          this.setValues(0, 0);
        }
      }

      this.held = function(){
        return this.paint.getButtonState(this.id);
      }

      this.getValues = function(){
        return this.values;
      }
      break;
    case "keyboard":
      this.keyColor = undefined;
      this.labelColor = undefined;
      this.backgroundColor = undefined;
      this.heldKeyColor = undefined;
      this.heldLabelColor = undefined;

      this.key_1 = new Controller("rectangle-button");
      this.key_2 = new Controller("rectangle-button");
      this.key_3 = new Controller("rectangle-button");
      this.key_4 = new Controller("rectangle-button");
      this.key_5 = new Controller("rectangle-button");
      this.key_6 = new Controller("rectangle-button");
      this.key_7 = new Controller("rectangle-button");
      this.key_8 = new Controller("rectangle-button");
      this.key_9 = new Controller("rectangle-button");
      this.key_0 = new Controller("rectangle-button");
      this.key_q = new Controller("rectangle-button");
      this.key_w = new Controller("rectangle-button");
      this.key_e = new Controller("rectangle-button");
      this.key_r = new Controller("rectangle-button");
      this.key_t = new Controller("rectangle-button");
      this.key_y = new Controller("rectangle-button");
      this.key_u = new Controller("rectangle-button");
      this.key_i = new Controller("rectangle-button");
      this.key_o = new Controller("rectangle-button");
      this.key_p = new Controller("rectangle-button");
      this.key_a = new Controller("rectangle-button");
      this.key_s = new Controller("rectangle-button");
      this.key_d = new Controller("rectangle-button");
      this.key_f = new Controller("rectangle-button");
      this.key_g = new Controller("rectangle-button");
      this.key_h = new Controller("rectangle-button");
      this.key_j = new Controller("rectangle-button");
      this.key_k = new Controller("rectangle-button");
      this.key_l = new Controller("rectangle-button");
      this.key_z = new Controller("rectangle-button");
      this.key_x = new Controller("rectangle-button");
      this.key_c = new Controller("rectangle-button");
      this.key_v = new Controller("rectangle-button");
      this.key_b = new Controller("rectangle-button");
      this.key_n = new Controller("rectangle-button");
      this.key_m = new Controller("rectangle-button");
      this.key_space = new Controller("rectangle-button");
      this.key_shift = new Controller("rectangle-button");
      this.key_backspace = new Controller("rectangle-button");
      this.key_enter = new Controller("rectangle-button");

      this.keys = [
        this.key_1, this.key_2, this.key_3, this.key_4, this.key_5, this.key_6, this.key_7, this.key_8, this.key_9, this.key_0,
        this.key_q, this.key_w, this.key_e, this.key_r, this.key_t, this.key_y, this.key_u, this.key_i, this.key_o, this.key_p, this.key_backspace,
        this.key_a, this.key_s, this.key_d, this.key_f, this.key_g, this.key_h, this.key_j, this.key_k, this.key_l, this.key_enter,
        this.key_z, this.key_x, this.key_c, this.key_v, this.key_b, this.key_n, this.key_m, this.key_shift,
        this.key_space
      ];

      this.setKeyData = function(color){
        this.key_1.setData("1", 990, 320, 80, 80, color);
        this.key_2.setData("2", 1090, 320, 80, 80, color);
        this.key_3.setData("3", 1190, 320, 80, 80, color);
        this.key_4.setData("4", 990, 420, 80, 80, color);
        this.key_5.setData("5", 1090, 420, 80, 80, color);
        this.key_6.setData("6", 1190, 420, 80, 80, color);
        this.key_7.setData("7", 990, 520, 80, 80, color);
        this.key_8.setData("8", 1090, 520, 80, 80, color);
        this.key_9.setData("9", 1190, 520, 80, 80, color);
        this.key_0.setData("0", 990, 620, 280, 80, color);
        this.key_q.setData("q", 10, 320, 80, 80, color);
        this.key_w.setData("w", 95, 320, 80, 80, color);
        this.key_e.setData("e", 180, 320, 80, 80, color);
        this.key_r.setData("r", 265, 320, 80, 80, color);
        this.key_t.setData("t", 350, 320, 80, 80, color);
        this.key_y.setData("y", 435, 320, 80, 80, color);
        this.key_u.setData("u", 520, 320, 80, 80, color);
        this.key_i.setData("i", 605, 320, 80, 80, color);
        this.key_o.setData("o", 690, 320, 80, 80, color);
        this.key_p.setData("p", 775, 320, 80, 80, color);
        this.key_backspace.setData("backspace", 880, 320, 80, 80, color);
        this.key_a.setData("a", 10, 420, 80, 80, color);
        this.key_s.setData("s", 95, 420, 80, 80, color);
        this.key_d.setData("d", 180, 420, 80, 80, color);
        this.key_f.setData("f", 265, 420, 80, 80, color);
        this.key_g.setData("g", 350, 420, 80, 80, color);
        this.key_h.setData("h", 435, 420, 80, 80, color)
        this.key_j.setData("j", 520, 420, 80, 80, color);
        this.key_k.setData("k", 605, 420, 80, 80, color);
        this.key_l.setData("l", 690, 420, 80, 80, color);
        this.key_enter.setData("enter", 795, 420, 165, 80, color);
        this.key_z.setData("z", 10, 520, 80, 80, color);
        this.key_x.setData("x", 95, 520, 80, 80, color);
        this.key_c.setData("c", 180, 520, 80, 80, color);
        this.key_v.setData("v", 265, 520, 80, 80, color);
        this.key_b.setData("b", 350, 520, 80, 80, color);
        this.key_n.setData("n", 435, 520, 80, 80, color);
        this.key_m.setData("m", 520, 520, 80, 80, color);
        this.key_shift.setData("shift", 622, 520, 338, 80, color);
        this.key_space.setData("space", 10, 620, 950, 80, color);
      }

      this.setKeyLabelColor = function(color){
        this.key_1.setLabel("1", 50, "Arial", color);
        this.key_2.setLabel("2", 50, "Arial", color);
        this.key_3.setLabel("3", 50, "Arial", color);
        this.key_4.setLabel("4", 50, "Arial", color);
        this.key_5.setLabel("5", 50, "Arial", color);
        this.key_6.setLabel("6", 50, "Arial", color);
        this.key_7.setLabel("7", 50, "Arial", color);
        this.key_8.setLabel("8", 50, "Arial", color);
        this.key_9.setLabel("9", 50, "Arial", color);
        this.key_0.setLabel("0", 50, "Arial", color);
        this.key_q.setLabel("q", 50, "Arial", color);
        this.key_w.setLabel("w", 50, "Arial", color);
        this.key_e.setLabel("e", 50, "Arial", color);
        this.key_r.setLabel("r", 50, "Arial", color);
        this.key_t.setLabel("t", 50, "Arial", color);
        this.key_y.setLabel("y", 50, "Arial", color);
        this.key_u.setLabel("u", 50, "Arial", color);
        this.key_i.setLabel("i", 50, "Arial", color);
        this.key_o.setLabel("o", 50, "Arial", color);
        this.key_p.setLabel("p", 50, "Arial", color);
        this.key_backspace.setLabel("<", 50, "Arial", color);
        this.key_a.setLabel("a", 50, "Arial", color);
        this.key_s.setLabel("s", 50, "Arial", color);
        this.key_d.setLabel("d", 50, "Arial", color);
        this.key_f.setLabel("f", 50, "Arial", color);
        this.key_g.setLabel("g", 50, "Arial", color);
        this.key_h.setLabel("h", 50, "Arial", color);
        this.key_j.setLabel("j", 50, "Arial", color);
        this.key_k.setLabel("k", 50, "Arial", color);
        this.key_l.setLabel("l", 50, "Arial", color);
        this.key_enter.setLabel("Enter", 50, "Arial", color);
        this.key_z.setLabel("z", 50, "Arial", color);
        this.key_x.setLabel("x", 50, "Arial", color);
        this.key_c.setLabel("c", 50, "Arial", color);
        this.key_v.setLabel("v", 50, "Arial", color);
        this.key_b.setLabel("b", 50, "Arial", color);
        this.key_n.setLabel("n", 50, "Arial", color);
        this.key_m.setLabel("m", 50, "Arial", color);
        this.key_shift.setLabel("Shift", 50, "Arial", color);
      }

      this.setKeyHoldColors = function(color, labelColor){
        this.keys.forEach((key) => {
          key.setHoldColors(color, labelColor);
        });
      }

      this.draw = function(paint){
        this.keys.forEach((key) => {
          key.draw(paint);
        });
      }
      break;
    default:
      break;
  }
}
