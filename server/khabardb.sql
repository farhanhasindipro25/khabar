PGDMP                 	         {            khabardabar    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16398    khabardabar    DATABASE     �   CREATE DATABASE khabardabar WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE khabardabar;
                postgres    false                        3079    16413 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false                       0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    16464 	   menuitems    TABLE     B  CREATE TABLE public.menuitems (
    itemid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    itemimage character varying(255),
    itemprice integer,
    menuitem character varying(255),
    itemdescription character varying(255),
    restuarant character varying(255),
    restuarantlocation character varying(255)
);
    DROP TABLE public.menuitems;
       public         heap    postgres    false    2            �            1259    16424    users    TABLE     �   CREATE TABLE public.users (
    userid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    username character varying(255) NOT NULL,
    useremail character varying(255) NOT NULL,
    userpassword character varying(255) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false    2                      0    16464 	   menuitems 
   TABLE DATA           |   COPY public.menuitems (itemid, itemimage, itemprice, menuitem, itemdescription, restuarant, restuarantlocation) FROM stdin;
    public          postgres    false    216   �                 0    16424    users 
   TABLE DATA           J   COPY public.users (userid, username, useremail, userpassword) FROM stdin;
    public          postgres    false    215          x           2606    16471    menuitems menuitems_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.menuitems
    ADD CONSTRAINT menuitems_pkey PRIMARY KEY (itemid);
 B   ALTER TABLE ONLY public.menuitems DROP CONSTRAINT menuitems_pkey;
       public            postgres    false    216            v           2606    16431    users users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215               Y  x��VKs�6>ӿ'���Go�3I���v'M�<#��	0��� )E�4=t�á��b�ow�]�@Z��U)+�沤��)����U��,U������\֋����o���׿?/��k4}����|V0Px�0f�_Q�ד�ꌂ�z6�$ϵ]���:�\��ubM���"km�a� ����\>Z:uw���U��^��e�����EV��F2�()h������e�ɐ��Q��T_�s@T��!�A�w�����9�oL��� �^����kϬ�^���h�wI�2�yE��g#�պ�"V��j�k��?�(EɊT�@p��EH��PTd*�UgR���vٷ�{Ě��(��y<�sD����Z 41���-�����ء��;��W�#�;�b��0�P��ݞ=���3f�����m�d��k�v�3�t��,k�`�nf��?��׬ku'��TI�W�fHM���<l�*�8�Sz�����]�cR��D]���MZU�;Ę$y�@�8����u�<U�dIL��0��rq*e�pl�(���%�OO����%f����/�C61�;< ��q�����6%q/Lp�,V�K��1=Z6������V&�X�l�|6��٩h���ްn�y���ɪa;X��*C���2OS�&��*��n�%,�8βS����O����YZ���waV���!�z��q��[��Q���Ԝ���)L�Ć��䆨�[�dJgfo���-�{�ջ�|Ӱ�C7_�7�'��;hf�'ʵ�#\o8/��������uX�YT&Y�hU��&��(�B�qQ~&����ǥ���������Ȧv%��+2�V���ƸtMf'��q��I��[Գ���f��QてM}t����+,��ْX�D�K�R��Qz5kH�Vl�kU� �u��q�Gi\e1K��o���8{:
* �Z�"�U&�/d�����3��T��(`���Tz���%Ex�w�1���^�8;�"��C�b�=xf'f�{t����v�8�
�fTU�Ĝ��ݢ�y�B,s�S,?3�v�mw���^� ,9�^E�������g�>||\��^��}0!9�:�$�CIe�MS|���\�a�fJv�R�{s�?�/[`�ce���ap;�~&V�	�g������x�J�8c
h�b��B�2��ȓ3���IV�+t����P�6�b2mY���lɵ;��8�j?ڧ"�ƕ/w��`&T�p��Z����OkQ=/B��HNY&� D��	v>R\B��itfxy���ǯf)�����u��HS�:�$�w�f2#�A���Fw�6�gJP�	�O�"���^Nݽa� �`&RT��ɑ��mN�e!�f
$�%�)���RQ8�bU�Sl��|��~9)�1���=���ڪ����1������L�Sk�5�!X��=I��r�L�p`��%�`5"����q>�1�T���K�PE	����<���(��"�ExJ�7����K����+*��0=L���K2j��#���Y�_�Ɯ�G!f�0�,��?m�P���a
?>��:K��Z� �YR����a�-����a?�p5�~~nb�����s*�&�9X�<���Y\\\�BJT�           x�m�I��H���+ޢ��I��k}88GorTp ��ͫ^UXA$����=������"@�g��P �g%C���w����n^�f��9���C"ⳣ.I���\��[�a�Z^��ɻ�{�gfع���`����c�Jb�s{��^/�U��
l�� $.�1c�Je}ʅ�Ֆ�9/ε���/�aŦ�t�ז��`�jz���Qى���=/�s�f�:��v1���+au�-q�t�������K��}����D$�f~����zv흂E1�W�è#�)P�634d��(��#���E�z=�4���� �`�"Zϣx�UVSH�g~c�B�\Ϧ�V���]�k��oܽ���p��y�?��NG��˄��L���9
���-�{T��*m�0�l ) �Y%�E���=�W �8�Q��8�����Y�с�=t΋��w�u/ڷNJ]���a!�L���;Lm;�>n��5��>� i� �H)=��H0���G�Oz־O��t��tʡ���cY|o|rr�Y�g����X2��DEN�0��G`�@,���1��f̰j2�l��D���h4�&����93�Aj#2>t�=Uٹ��ø�Z,F�uC��n5g#
���'���c�`B�iR���+��_�}����{??�x�
�4�n\��ͣ˰5m�ż5f�=�A�^�R.�xS�1��TNq5i
[�#��/%U.CJ�J�{|8�����5�I���l��f�a��6f74�bvl_��:��爨|�ӵ?�y�+P�ϐ��c^9�Wx)�x�?�*D*��A>|���)���[��+:��
O�Y������j�w�����#����v�{u=�+SlDSU`�Yc�4��?�}�>ه7�r�ǃY�7��z5̷��{ب��̓,��eN^ӊ����u�	e)g j�VRW~󠋁��2̰�Ym��K���G�`�R�Z�nA��>}g!C�8��oko��[����r����E3��SN� ��U�J
|_�
�f1֖�j�m��������s=�M���n�lr��".��O���*�t�����< *\�e��K��LD-R�0(�r}�jhk�y��O��,��0x�ٱ]�H���05��b�>�%:��n����w�л�{ln��!�*�%��TL��� Rn�B�*H��A��vܙ~�7q���u��U�L�r��#�d�_�����1;���NV�B�u�\Ʃu��~%.S^umy>�UM�B!�����P=�tK�i���f���r��)����"���-��U�vp���4=���:�z�?8�_�     