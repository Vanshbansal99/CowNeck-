

import 'package:flutter/material.dart';
import 'Login_register.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.green),
      home: LoginPage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

//the very first page that appears on the screen with
//mooofarm logo and continue button
class AppLocalizations {
  Map<String, dynamic> localizedValues = {};
  Locale? locale;
}

class _LoginPageState extends State<LoginPage>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<Offset> _slideAnimation;
  late Animation<double> _fadeAnimation;

  bool _firstTimeOpen = true;

  bool _isDarkMode = false; // Initially assuming light mode

  void _toggleTheme() {
    setState(() {
      _isDarkMode = !_isDarkMode;

    });
  }

  late AppLocalizations _appLocalizations;
  Future<void> _loadLanguage(Locale locale) async {
    final jsonContent =
    await rootBundle.loadString('assets/${locale.languageCode}.json');
    final Map<String, dynamic> translations = json.decode(jsonContent);
    // print(translations);
    setState(() {
      _appLocalizations.localizedValues = translations;
      _appLocalizations.locale = locale;
    });
    print(_appLocalizations.localizedValues);
  }

  Locale _currentLocale = Locale('en');

  void _changeLanguage(Locale newLocale) {
    setState(() {
      _currentLocale = newLocale;
    });
    _loadLanguage(_currentLocale);
  }

  @override
  void initState() {
    _appLocalizations = AppLocalizations(); // Initialize the instance
    _loadLanguage(_currentLocale);
    _animationController = AnimationController(
      vsync: this,
      duration: Duration(seconds: 1),
    );

    _slideAnimation = Tween<Offset>(
      begin: Offset(0, 1),
      end: Offset.zero,
    ).animate(
      CurvedAnimation(
        parent: _animationController,
        curve: Curves.fastOutSlowIn,
      ),
    );

    _fadeAnimation = Tween<double>(
      begin: _firstTimeOpen ? 0 : 1,
      end: 1,
    ).animate(
      CurvedAnimation(
        parent: _animationController,
        curve: Curves.easeIn,
      ),
    );

    _animationController.forward();
    super.initState();
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: _isDarkMode ? ThemeData.dark() : ThemeData.light(),
      home: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          title: Text('Login Page'),
          actions: [
            IconButton(
              icon: Icon(
                _isDarkMode ? Icons.light_mode : Icons.dark_mode,
              ),
              onPressed: _toggleTheme,
            ),
          ],
        ),
        body: SafeArea(
            child: Stack(
                children: [
            Theme(
            // Apply theme to the entire Scaffold
            data: _isDarkMode ? ThemeData.dark() : ThemeData.light(),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            FadeTransition(
              opacity: _fadeAnimation,
              child: SlideTransition(
                position: _slideAnimation,
                child: SizedBox(
                  //mooofarm logo size and img
                  width: 200,
                  height: 200,
                  child: Image.network(
                    //'https://pbs.twimg.com/profile_images/1457950809623187463/N8F-A4xt_400x400.jpg',
                    //size: 100
                    'img.jpeg',
                  ),
                ),
              ),
            ),
            SizedBox(height: 20),

            FadeTransition(
              opacity: _fadeAnimation,
              child: TypewriterAnimatedText(
                  _appLocalizations.localizedValues['welcome_message'],
                  textStyle: TextStyle(
                      fontSize: 20.0, fontStyle: FontStyle.italic)),
            ),
            SizedBox(height: 40),

            //animations given for the fade appearing of continue button
            FadeTransition(
              opacity: _fadeAnimation,
              child: Center(
                child: SizedBox(
                  width: 150,
                  height: 40,
                  child: ElevatedButton(
                    onPressed: () {
                      setState(() {
                        _firstTimeOpen = false;
                      });
                      // Navigate to the new page containing the login window
                      // Navigator.push(
                      //   context,
                      //   MaterialPageRoute(
                      //       builder: (context) =>
                      //           SeparatePage(_appLocalizations)),
                      // );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.green,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(70)),
                    ),
                    child: Text(
                        _appLocalizations
                            .localizedValues['continue_button'],
                        style: (TextStyle(
                          fontSize: 18.0,
                          color: Colors.white,
                        ))),
                  ),
                ),
              ),
            ),
            SizedBox(height: 20),
            // Animated Text
          ],
        ),
        // Align(
        //   alignment: Alignment.topRight,
        //   child: BottomAppBar(
        //     elevation: 0.0,
        //     child: Row(
        //       mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        //       children: [
        //         Image.network(
        //           'https://pbs.twimg.com/profile_images/1457950809623187463/N8F-A4xt_400x400.jpg',
        //           width: 50,
        //           height: 50,
        //         ),
        //         TextButton(
        //           onPressed: () => _changeLanguage(Locale('en')),
        //           child: Text('English'),
        //         ),
        //         TextButton(
        //           onPressed: () => _changeLanguage(Locale('hi')),
        //           child: Text('हिंदी'),
        //         ),
        //         TextButton(
        //           onPressed: () => _changeLanguage(Locale('pa')),
        //           child: Text('ਪੰਜਾਬੀ'),

        //         ),


        //       ],
        //     ),
        //   ),
        // ),
            )
                ],
      ),
    ),
    ),


    );
  }
}







//auto typing text animation (Mooofarm, Diary ka kaam asaan kare)
class TypewriterAnimatedText extends StatefulWidget {
  final String text;
  final TextStyle textStyle;

  TypewriterAnimatedText(this.text, {required this.textStyle});

  @override
  _TypewriterAnimatedTextState createState() => _TypewriterAnimatedTextState();
}

//auto typing text animation (Mooofarm, Diary ka kaam asaan kare)
class _TypewriterAnimatedTextState extends State<TypewriterAnimatedText>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  String _animatedText = "";

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: Duration(
          milliseconds: widget.text.length *
              150), // Adjust the duration as per your requirement
    );

    _controller.addListener(() {
      int currentLength = (_controller.value * widget.text.length).round();
      setState(() {
        _animatedText = widget.text.substring(0, currentLength);
      });
    });

    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  void didUpdateWidget(TypewriterAnimatedText oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.text != oldWidget.text) {
      _controller.reset();
      _animatedText = "";
      _controller.forward();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Text(
      _animatedText,
      style: widget.textStyle,
    );
  }
}
